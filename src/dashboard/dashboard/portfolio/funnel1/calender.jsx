import React, { useState, forwardRef, useEffect } from 'react';
import { FiTrash2, FiCalendar, FiClock, FiChevronDown } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Input for DatePicker with animations
const CustomDatePickerInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <motion.div
    className="input-with-icon-right"
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
  >
    <input
      type="text"
      className="styled-input datepicker-input"
      onClick={onClick}
      value={value}
      ref={ref}
      readOnly
      placeholder={placeholder}
    />
    <FiCalendar className="input-icon" />
  </motion.div>
));

const AppointmentCalendar = ({ initialStartDate, initialEndDate, onApply, onCancel, onChange }) => {
  const [appointmentData, setAppointmentData] = useState({
    calendarEmbedCode: '',
    appointmentHeadline: 'Schedule a Call With Us',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    availableFromTime: '09:00',
    availableToTime: '17:00',
    slotDuration: 30,
    timeZone: 'UTC+05:30',
    blockedDates: [],
  });

  const [startDate, setStartDate] = useState(
  initialStartDate ? (typeof initialStartDate === 'string' ? new Date(initialStartDate) : initialStartDate) : null
);
 const [endDate, setEndDate] = useState(
  initialEndDate ? (typeof initialEndDate === 'string' ? new Date(initialEndDate) : initialEndDate) : null
);
  const [filteredDates, setFilteredDates] = useState([]);
  const [validationError, setValidationError] = useState('');
  const [blockDateInput, setBlockDateInput] = useState(null);

  // Filter available dates based on selected range, available days, and blocked dates
  useEffect(() => {
    if (startDate && endDate) {
      const datesInRange = getDatesInRange(startDate, endDate);
      const filtered = datesInRange.filter(date => {
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const dateStr = formatDateToYMD(date);

        return (
          appointmentData.availableDays.includes(dayName) &&
          !appointmentData.blockedDates.includes(dateStr)
        );
      });
      setFilteredDates(filtered);
    } else {
      setFilteredDates([]);
    }
  }, [startDate, endDate, appointmentData.availableDays, appointmentData.blockedDates]);

  const getDatesInRange = (start, end) => {
    const date = new Date(start);
    date.setHours(0, 0, 0, 0);
    const dates = [];

    const endDate = new Date(end);
    endDate.setHours(0, 0, 0, 0);

    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const formatDateToYMD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...appointmentData, [name]: value };
    setAppointmentData(updatedData);
    onChange(updatedData); // Notify parent component of the change
    console.log(`Updated ${name}:`, value); // Log the updated field
  };

  const handleDayToggle = (day) => {
    setAppointmentData(prev => {
      const newDays = prev.availableDays.includes(day)
        ? prev.availableDays.filter(d => d !== day)
        : [...prev.availableDays, day];
      return { ...prev, availableDays: newDays };
    });
  };

  const handleBlockDate = (date) => {
    if (date) {
      const dateStr = formatDateToYMD(date);
      if (startDate && endDate) {
        const dateObj = new Date(dateStr);
        const startObj = new Date(formatDateToYMD(startDate));
        const endObj = new Date(formatDateToYMD(endDate));

        if (dateObj < startObj || dateObj > endObj) {
          setValidationError('Blocked date must be within the selected date range');
          return;
        }
      }

      if (appointmentData.blockedDates.includes(dateStr)) {
        setValidationError('This date is already blocked');
        return;
      }

      setValidationError('');
      const updatedBlockedDates = [...appointmentData.blockedDates, dateStr].sort();
      setAppointmentData(prev => ({
        ...prev,
        blockedDates: updatedBlockedDates
      }));
      onChange({ ...appointmentData, blockedDates: updatedBlockedDates }); // Notify parent component
      setBlockDateInput(null);
    }
  };

  const removeBlockedDate = (index) => {
    setAppointmentData(prev => {
      const updatedBlockedDates = prev.blockedDates.filter((_, i) => i !== index);
      onChange({ ...prev, blockedDates: updatedBlockedDates }); // Notify parent component
      return { ...prev, blockedDates: updatedBlockedDates };
    });
  };

  const handleDateRangeChange = (dates) => {
    const [start, end] = dates;
    if (start && end) {
      const startDate = new Date(start);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(end);
      endDate.setHours(23, 59, 59, 999);

      setStartDate(startDate);
      setEndDate(endDate);
    } else {
      setStartDate(start);
      setEndDate(null);
    }
    setValidationError('');
  };

  const handleApply = () => {
    if (!startDate || !endDate) {
      setValidationError('Please select a date range');
      return;
    }

    if (startDate > endDate) {
      setValidationError('End date must be after start date');
      return;
    }

    if (appointmentData.availableDays.length === 0) {
      setValidationError('Please select at least one available day');
      return;
    }

    const finalData = {
      ...appointmentData,
      startDate,
      endDate,
      filteredDates,
      totalAvailableSlots: calculateTotalSlots()
    };

    onApply(finalData); // Call onApply with the final data
  };

  const calculateTotalSlots = () => {
    if (!filteredDates.length) return 0;

    const fromTime = appointmentData.availableFromTime.split(':');
    const toTime = appointmentData.availableToTime.split(':');
    const slotDuration = parseInt(appointmentData.slotDuration);

    const startHour = parseInt(fromTime[0]);
    const startMin = parseInt(fromTime[1]);
    const endHour = parseInt(toTime[0]);
    const endMin = parseInt(toTime[1]);

    const totalMinutes = (endHour * 60 + endMin) - (startHour * 60 + startMin);
    const slotsPerDay = Math.floor(totalMinutes / slotDuration);

    return slotsPerDay * filteredDates.length;
  };

  const formatDisplayDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDayClassName = (date) => {
    const dateStr = formatDateToYMD(date);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

    if (appointmentData.blockedDates.includes(dateStr)) {
      return "calendar-day blocked";
    }
    if (appointmentData.availableDays.includes(dayName)) {
      return "calendar-day available";
    }
    return "calendar-day";
  };

  return (
    <div className="content-section">
      <h3 className="section-title">Appointment Calendar Settings</h3>

      <div className="form-field">
        <label>Appointment Headline</label>
        <input
          type="text"
          name="appointmentHeadline"
          value={appointmentData.appointmentHeadline}
          onChange={handleInputChange}
          className="styled-input"
          placeholder="e.g., Schedule Your Free Consultation"
        />
      </div>

      <div className="form-field">
        <h4 className="subsection-title">Availability Settings</h4>
        <p className="section-description">
          Define when you are available for appointments.
        </p>

        <AnimatePresence>
          {validationError && (
            <motion.div
              className="validation-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {validationError}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="form-field calendar-container">
        <label>Select Available Date Range</label>
        <DatePicker
          selected={startDate}
          onChange={handleDateRangeChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          minDate={new Date()}
          className="styled-datepicker"
          calendarClassName="styled-calendar"
          dayClassName={getDayClassName}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled
          }) => (
            <div className="calendar-header">
              <motion.button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="calendar-nav-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {'<'}
              </motion.button>
              <div className="calendar-month-year">
                <select
                  value={date.getMonth()}
                  onChange={({ target: { value } }) => changeMonth(value)}
                  className="calendar-select"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                      {new Date(date.getFullYear(), i).toLocaleString('default', { month: 'long' })}
                    </option>
                  ))}
                </select>
                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                  className="calendar-select"
                >
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
              <motion.button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="calendar-nav-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {'>'}
              </motion.button>
            </div>
          )}
        />
      </div>

      {startDate && endDate && (
        <motion.div
          className="date-range-info"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="info-item">
            <span className="info-label">Selected Range:</span>
            <span className="info-value">
              {formatDisplayDate(startDate)} to {formatDisplayDate(endDate)}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Available Days:</span>
            <span className="info-value">
              {filteredDates.length} days ({appointmentData.availableDays.join(', ')})
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Total Available Slots:</span>
            <span className="info-value">{calculateTotalSlots()} slots</span>
          </div>
        </motion.div>
      )}

      <div className="form-field">
        <label>Available Days of the Week</label>
        <div className="days-grid">
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
            <motion.label
              key={day}
              className={`day-pill ${appointmentData.availableDays.includes(day) ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input
                type="checkbox"
                checked={appointmentData.availableDays.includes(day)}
                onChange={() => handleDayToggle(day)}
                hidden
              />
              {day.substring(0, 3)}
            </motion.label>
          ))}
        </div>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label>Available From</label>
          <div className="input-with-icon-right">
            <input
              type="time"
              name="availableFromTime"
              value={appointmentData.availableFromTime}
              onChange={handleInputChange}
              className="styled-input"
            />
            <FiClock className="input-icon" />
          </div>
        </div>
        <div className="form-field">
          <label>Available To</label>
          <div className="input-with-icon-right">
            <input
              type="time"
              name="availableToTime"
              value={appointmentData.availableToTime}
              onChange={handleInputChange}
              className="styled-input"
            />
            <FiClock className="input-icon" />
          </div>
        </div>
        <div className="form-field">
          <label>Slot Duration</label>
          <div className="custom-select-wrapper">
            <select
              name="slotDuration"
              value={appointmentData.slotDuration}
              onChange={handleInputChange}
              className="styled-select"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
            </select>
            <FiChevronDown className="select-icon" />
          </div>
        </div>
        <div className="form-field">
          <label>Time Zone</label>
          <div className="custom-select-wrapper">
            <select
              name="timeZone"
              value={appointmentData.timeZone}
              onChange={handleInputChange}
              className="styled-select"
            >
              <option value="UTC-12:00">UTC-12:00 (Baker Island)</option>
              <option value="UTC-11:00">UTC-11:00 (Samoa Time)</option>
              <option value="UTC-10:00">UTC-10:00 (Hawaii-Aleutian Standard Time)</option>
              <option value="UTC-09:00">UTC-09:00 (Alaska Standard Time)</option>
              <option value="UTC-08:00">UTC-08:00 (Pacific Standard Time)</option>
              <option value="UTC-07:00">UTC-07:00 (Mountain Standard Time)</option>
              <option value="UTC-06:00">UTC-06:00 (Central Standard Time)</option>
              <option value="UTC-05:00">UTC-05:00 (Eastern Standard Time)</option>
              <option value="UTC-04:00">UTC-04:00 (Atlantic Standard Time)</option>
              <option value="UTC-03:30">UTC-03:30 (Newfoundland Standard Time)</option>
              <option value="UTC-03:00">UTC-03:00 (Argentina Standard Time)</option>
              <option value="UTC-02:00">UTC-02:00 (South Georgia Standard Time)</option>
              <option value="UTC-01:00">UTC-01:00 (Azores Standard Time)</option>
              <option value="UTC+00:00">UTC+00:00 (Greenwich Mean Time)</option>
              <option value="UTC+01:00">UTC+01:00 (Central European Time)</option>
              <option value="UTC+02:00">UTC+02:00 (Eastern European Time)</option>
              <option value="UTC+03:00">UTC+03:00 (Moscow Standard Time)</option>
              <option value="UTC+03:30">UTC+03:30 (Iran Standard Time)</option>
              <option value="UTC+04:00">UTC+04:00 (Gulf Standard Time)</option>
              <option value="UTC+04:30">UTC+04:30 (Afghanistan Standard Time)</option>
              <option value="UTC+05:00">UTC-05:00 (Pakistan Standard Time)</option>
              <option value="UTC+05:30">UTC+05:30 (Indian Standard Time)</option>
              <option value="UTC+05:45">UTC+05:45 (Nepal Standard Time)</option>
              <option value="UTC+06:00">UTC+06:00 (Bangladesh Standard Time)</option>
              <option value="UTC+06:30">UTC+06:30 (Myanmar Standard Time)</option>
              <option value="UTC+07:00">UTC+07:00 (Indochina Time)</option>
              <option value="UTC+08:00">UTC+08:00 (China Standard Time)</option>
              <option value="UTC+08:45">UTC+08:45 (Australian Central Western Standard Time)</option>
              <option value="UTC+09:00">UTC+09:00 (Japan Standard Time)</option>
              <option value="UTC+09:30">UTC+09:30 (Australian Central Standard Time)</option>
              <option value="UTC+10:00">UTC+10:00 (Australian Eastern Standard Time)</option>
              <option value="UTC+10:30">UTC+10:30 (Lord Howe Standard Time)</option>
              <option value="UTC+11:00">UTC+11:00 (Solomon Islands Time)</option>
              <option value="UTC+12:00">UTC+12:00 (New Zealand Standard Time)</option>
              <option value="UTC+12:45">UTC+12:45 (Chatham Standard Time)</option>
              <option value="UTC+13:00">UTC+13:00 (Phoenix Islands Time)</option>
              <option value="UTC+14:00">UTC+14:00 (Line Islands Time)</option>
            </select>
            <FiChevronDown className="select-icon" />
          </div>
        </div>
      </div>

      <div className="form-field">
        <label>Block Specific Dates</label>
        <div className="input-with-icon-right">
          <DatePicker
            selected={blockDateInput}
            placeholderText="Click to add blocked date"
            onChange={(date) => {
              setBlockDateInput(date);
              handleBlockDate(date);
            }}
            minDate={startDate}
            maxDate={endDate}
            className="styled-input datepicker-input"
            customInput={<CustomDatePickerInput placeholder="Click to add blocked date" />}
          />
          <FiCalendar className="input-icon" />
        </div>
        <div className="blocked-dates-list">
          {appointmentData.blockedDates.length > 0 ? (
            <ul>
              {appointmentData.blockedDates.map((dateStr, index) => (
                <motion.li
                  key={dateStr}
                  className="blocked-date-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{formatDisplayDate(new Date(dateStr))}</span>
                  <motion.button
                    type="button"
                    onClick={() => removeBlockedDate(index)}
                    className="remove-item-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiTrash2 />
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="field-note">No dates blocked yet.</p>
          )}
        </div>
      </div>

      <div className="content-actions">
        <motion.button
          type="button"
          onClick={handleApply}
          className="button-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Apply Settings
        </motion.button>
        <motion.button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </motion.button>
      </div>
  
      <style jsx>{`
        .content-section {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #333;
        }
        
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }
        
        .subsection-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 1.5rem 0 0.5rem;
          color: #2d3748;
        }
        
        .section-description {
          color: #718096;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .form-field {
          margin-bottom: 1.5rem;
        }
        
        label {
          display: block;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #4a5568;
          font-size: 0.9rem;
        }
        
        .styled-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background-color: #fff;
          transition: all 0.2s ease;
          font-size: 0.9rem;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        
        .styled-input:focus {
          outline: none;
          border-color: #4299e1;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
        }
        
        .input-with-icon-right {
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
          pointer-events: none;
        }
        
        .calendar-container {
          margin-top: 1.5rem;
        }
        
        .styled-datepicker {
          width: 100%;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 1.25rem;
          background: white;
          border: 1px solid #e2e8f0;
        }
        
        .styled-calendar {
          border: none;
          font-family: inherit;
          width: 100%;
        }
        
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding: 0 0.5rem;
        }
        
        .calendar-month-year {
          display: flex;
          gap: 0.75rem;
        }
        
        .calendar-nav-button {
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          color: #4a5568;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          background-color: #f7fafc;
        }
        
        .calendar-nav-button:hover {
          background-color: #edf2f7;
          color: #2d3748;
        }
        
        .calendar-nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .calendar-select {
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
          background-color: white;
          color: #4a5568;
          cursor: pointer;
          font-weight: 500;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        
        .calendar-select:focus {
          outline: none;
          border-color: #4299e1;
        }
        
        .react-datepicker__month-container {
          width: 100%;
        }
        
        .react-datepicker__header {
          background-color: white;
          border-bottom: 1px solid #e2e8f0;
          padding-top: 0;
        }
        
        .react-datepicker__day-names {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          padding: 0 0.5rem;
        }
        
        .react-datepicker__day-name {
          color: #718096;
          font-weight: 500;
          font-size: 0.8rem;
          width: 2.25rem;
          line-height: 2.25rem;
        }
        
        .react-datepicker__week {
          display: flex;
          justify-content: space-between;
          padding: 0.25rem 0.5rem;
        }
        
        .calendar-day {
          padding: 0.375rem;
          border-radius: 50%;
          text-align: center;
          cursor: pointer;
          width: 2.25rem;
          height: 2.25rem;
          line-height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.125rem;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }
        
        .calendar-day:hover {
          background-color: #edf2f7;
        }
        
        .calendar-day.available {
          background-color: #ebf8ff;
          color: #3182ce;
          font-weight: 500;
        }
        
        .calendar-day.blocked {
          background-color: #fed7d7;
          color: #e53e3e;
          text-decoration: line-through;
          opacity: 0.7;
        }
        
        .react-datepicker__day--selected, 
        .react-datepicker__day--in-selecting-range, 
        .react-datepicker__day--in-range {
          background-color: #3182ce;
          color: white;
          font-weight: 600;
        }
        
        .react-datepicker__day--disabled {
          color: #cbd5e0;
          cursor: not-allowed;
        }
        
        .react-datepicker__day--outside-month {
          color: #cbd5e0;
        }
        
        .date-range-info {
          background-color: #f7fafc;
          padding: 1.25rem;
          border-radius: 0.75rem;
          margin: 1.5rem 0;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        
        .info-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
        }
        
        .info-label {
          font-weight: 500;
          color: #718096;
        }
        
        .info-value {
          font-weight: 600;
          color: #2d3748;
        }
        
        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        
        .day-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background-color: #f7fafc;
          color: #718096;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
        }
        
        .day-pill.active {
          background-color: #ebf8ff;
          color: #3182ce;
          font-weight: 600;
          border-color: #bee3f8;
          box-shadow: 0 1px 2px 0 rgba(66, 153, 225, 0.2);
        }
        
        .blocked-dates-list {
          margin-top: 1rem;
        }
        
        .blocked-dates-list ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }
        
        .blocked-date-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background-color: #fff5f5;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
          border: 1px solid #fed7d7;
          font-size: 0.875rem;
        }
        
        .remove-item-button {
          background: none;
          border: none;
          color: #e53e3e;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .remove-item-button:hover {
          background-color: #fed7d7;
        }
        
        .validation-error {
          color: #e53e3e;
          background-color: #fff5f5;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          border: 1px solid #fed7d7;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .custom-select-wrapper {
          position: relative;
        }
        
        .styled-select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background-color: #fff;
          appearance: none;
          font-size: 0.9rem;
          color: #4a5568;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        
        .select-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
          pointer-events: none;
        }
        
        .content-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .button-primary {
          background-color: #3182ce;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        
        .button-primary:hover {
          background-color: #2b6cb0;
        }
        
        .button-secondary {
          background-color: white;
          color: #3182ce;
          border: 1px solid #3182ce;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        
        .button-secondary:hover {
          background-color: #ebf8ff;
        }
        
        .field-note {
          color: #a0aec0;
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .days-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .content-actions {
            flex-direction: column;
          }
          
          .button-primary, .button-secondary {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentCalendar;


// // CombinedFunnelEditor.jsx
// import React, { useState, useEffect, forwardRef } from 'react';
// import { useSelector } from 'react-redux';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { motion, AnimatePresence } from 'framer-motion';
// import "./funnel.css";

// // --- ICONS (Self-contained for portability) ---
// const FiTrash2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;
// const FiCalendar = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
// const FiClock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
// const FiChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>;
// const FiPlus = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
// const FiX = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
// const FiSave = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>;
// const FiExternalLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
// const FiChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;


// // --- REFACTORED AppointmentCalendar Component ---
// const CustomDatePickerInput = forwardRef(({ value, onClick, placeholder }, ref) => (
//   <motion.div
//     className="input-with-icon-right"
//     whileHover={{ scale: 1.01 }}
//     whileTap={{ scale: 0.98 }}
//   >
//     <input
//       type="text"
//       className="styled-input datepicker-input"
//       onClick={onClick}
//       value={value}
//       ref={ref}
//       readOnly
//       placeholder={placeholder}
//     />
//     <FiCalendar className="input-icon" />
//   </motion.div>
// ));

// const AppointmentCalendar = ({ value: appointmentData, onChange }) => {
//   const [validationError, setValidationError] = useState('');
//   const [blockDateInput, setBlockDateInput] = useState(null);

//   const startDate = appointmentData.availabilityRange?.startDate ? new Date(appointmentData.availabilityRange.startDate) : null;
//   const endDate = appointmentData.availabilityRange?.endDate ? new Date(appointmentData.availabilityRange.endDate) : null;

//   const updateAppointmentData = (field, fieldValue) => {
//     onChange({ ...appointmentData, [field]: fieldValue });
//   };

//   const getDatesInRange = (start, end) => {
//     const date = new Date(start);
//     date.setHours(0, 0, 0, 0);
//     const dates = [];
//     const endDateObj = new Date(end);
//     endDateObj.setHours(0, 0, 0, 0);
//     while (date <= endDateObj) {
//       dates.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     return dates;
//   };

//   const formatDateToYMD = (date) => {
//     if (!date) return '';
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, '0');
//     const day = String(d.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const filteredDates = (() => {
//     if (startDate && endDate) {
//       const datesInRange = getDatesInRange(startDate, endDate);
//       return datesInRange.filter(date => {
//         const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
//         const dateStr = formatDateToYMD(date);
//         return (
//           appointmentData.availableDays.includes(dayName) &&
//           !appointmentData.blockedDates.includes(dateStr)
//         );
//       });
//     }
//     return [];
//   })();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     updateAppointmentData(name, value);
//   };

//   const handleDayToggle = (day) => {
//     const newDays = appointmentData.availableDays.includes(day)
//       ? appointmentData.availableDays.filter(d => d !== day)
//       : [...appointmentData.availableDays, day];
//     updateAppointmentData('availableDays', newDays);
//   };

//   const handleBlockDate = (date) => {
//     if (date) {
//       const dateStr = formatDateToYMD(date);
//       if (startDate && endDate) {
//         const dateObj = new Date(dateStr);
//         const startObj = new Date(formatDateToYMD(startDate));
//         const endObj = new Date(formatDateToYMD(endDate));
//         if (dateObj < startObj || dateObj > endObj) {
//           setValidationError('Blocked date must be within the selected date range');
//           return;
//         }
//       }
//       if (appointmentData.blockedDates.includes(dateStr)) {
//         setValidationError('This date is already blocked');
//         return;
//       }
//       setValidationError('');
//       const newBlockedDates = [...appointmentData.blockedDates, dateStr].sort();
//       updateAppointmentData('blockedDates', newBlockedDates);
//       setBlockDateInput(null);
//     }
//   };

//   const removeBlockedDate = (index) => {
//     const newBlockedDates = appointmentData.blockedDates.filter((_, i) => i !== index);
//     updateAppointmentData('blockedDates', newBlockedDates);
//   };

//   const handleDateRangeChange = (dates) => {
//     const [start, end] = dates;
//     let newStartDate = start;
//     let newEndDate = end;

//     if (start && end) {
//       newStartDate = new Date(start);
//       newStartDate.setHours(0, 0, 0, 0);
//       newEndDate = new Date(end);
//       newEndDate.setHours(23, 59, 59, 999);
//     }

//     onChange({
//       ...appointmentData,
//       availabilityRange: {
//         startDate: newStartDate ? newStartDate.toISOString() : null,
//         endDate: newEndDate ? newEndDate.toISOString() : null
//       }
//     });
//     setValidationError('');
//   };

//   const calculateTotalSlots = () => {
//     if (!filteredDates.length) return 0;
//     const fromTime = appointmentData.availableFromTime.split(':');
//     const toTime = appointmentData.availableToTime.split(':');
//     const slotDuration = parseInt(appointmentData.slotDuration, 10);
//     if (isNaN(slotDuration) || slotDuration <= 0) return 0;

//     const startHour = parseInt(fromTime[0], 10);
//     const startMin = parseInt(fromTime[1], 10);
//     const endHour = parseInt(toTime[0], 10);
//     const endMin = parseInt(toTime[1], 10);

//     const totalMinutes = (endHour * 60 + endMin) - (startHour * 60 + startMin);
//     const slotsPerDay = Math.floor(totalMinutes / slotDuration);

//     return slotsPerDay * filteredDates.length;
//   };

//   const formatDisplayDate = (date) => {
//     if (!date) return '';
//     return new Date(date).toLocaleDateString('en-US', {
//       weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'
//     });
//   };

//   const getDayClassName = (date) => {
//     const dateStr = formatDateToYMD(date);
//     const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
//     if (appointmentData.blockedDates.includes(dateStr)) return "calendar-day blocked";
//     if (appointmentData.availableDays.includes(dayName)) return "calendar-day available";
//     return "calendar-day";
//   };

//   return (
//     <div className="content-section">
//       <h3 className="section-title">Appointment Calendar Settings</h3>
//       <div className="form-field">
//         <label>Appointment Headline</label>
//         <input
//           type="text"
//           name="appointmentHeadline"
//           value={appointmentData.appointmentHeadline}
//           onChange={handleInputChange}
//           className="styled-input"
//           placeholder="e.g., Schedule Your Free Consultation"
//         />
//       </div>
//       <div className="form-field">
//         <h4 className="subsection-title">Availability Settings</h4>
//         <p className="section-description">Define when you are available for appointments.</p>
//         <AnimatePresence>
//           {validationError && (
//             <motion.div className="validation-error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
//               {validationError}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <div className="form-field calendar-container">
//         <label>Select Available Date Range</label>
//         <DatePicker
//           selected={startDate}
//           onChange={handleDateRangeChange}
//           startDate={startDate}
//           endDate={endDate}
//           selectsRange
//           inline
//           minDate={new Date()}
//           className="styled-datepicker"
//           calendarClassName="styled-calendar"
//           dayClassName={getDayClassName}
//           renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
//             <div className="calendar-header">
//               <motion.button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="calendar-nav-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>{'<'}</motion.button>
//               <div className="calendar-month-year">
//                 <select value={date.getMonth()} onChange={({ target: { value } }) => changeMonth(value)} className="calendar-select">
//                   {Array.from({ length: 12 }, (_, i) => (<option key={i} value={i}>{new Date(date.getFullYear(), i).toLocaleString('default', { month: 'long' })}</option>))}
//                 </select>
//                 <select value={date.getFullYear()} onChange={({ target: { value } }) => changeYear(value)} className="calendar-select">
//                   {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i).map((year) => (<option key={year} value={year}>{year}</option>))}
//                 </select>
//               </div>
//               <motion.button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="calendar-nav-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>{'>'}</motion.button>
//             </div>
//           )}
//         />
//       </div>
//       {startDate && endDate && (
//         <motion.div className="date-range-info" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//           <div className="info-item"><span className="info-label">Selected Range:</span><span className="info-value">{formatDisplayDate(startDate)} to {formatDisplayDate(endDate)}</span></div>
//           <div className="info-item"><span className="info-label">Available Days:</span><span className="info-value">{filteredDates.length} days ({appointmentData.availableDays.join(', ')})</span></div>
//           <div className="info-item"><span className="info-label">Total Available Slots:</span><span className="info-value">{calculateTotalSlots()} slots</span></div>
//         </motion.div>
//       )}
//       <div className="form-field">
//         <label>Available Days of the Week</label>
//         <div className="days-grid">
//           {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
//             <motion.label key={day} className={`day-pill ${appointmentData.availableDays.includes(day) ? 'active' : ''}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <input type="checkbox" checked={appointmentData.availableDays.includes(day)} onChange={() => handleDayToggle(day)} hidden />
//               {day.substring(0, 3)}
//             </motion.label>
//           ))}
//         </div>
//       </div>
//       <div className="form-grid">
//         <div className="form-field"><label>Available From</label><div className="input-with-icon-right"><input type="time" name="availableFromTime" value={appointmentData.availableFromTime} onChange={handleInputChange} className="styled-input" /><FiClock className="input-icon" /></div></div>
//         <div className="form-field"><label>Available To</label><div className="input-with-icon-right"><input type="time" name="availableToTime" value={appointmentData.availableToTime} onChange={handleInputChange} className="styled-input" /><FiClock className="input-icon" /></div></div>
//         <div className="form-field"><label>Slot Duration</label><div className="custom-select-wrapper"><select name="slotDuration" value={appointmentData.slotDuration} onChange={handleInputChange} className="styled-select"><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="45">45 minutes</option><option value="60">60 minutes</option></select><FiChevronDown className="select-icon" /></div></div>
//         <div className="form-field"><label>Time Zone</label><div className="custom-select-wrapper"><select name="timeZone" value={appointmentData.timeZone} onChange={handleInputChange} className="styled-select"><option value="UTC-12:00">UTC-12:00</option><option value="UTC-11:00">UTC-11:00</option><option value="UTC-10:00">UTC-10:00</option><option value="UTC-09:00">UTC-09:00</option><option value="UTC-08:00">UTC-08:00</option><option value="UTC-07:00">UTC-07:00</option><option value="UTC-06:00">UTC-06:00</option><option value="UTC-05:00">UTC-05:00</option><option value="UTC-04:00">UTC-04:00</option><option value="UTC-03:30">UTC-03:30</option><option value="UTC-03:00">UTC-03:00</option><option value="UTC-02:00">UTC-02:00</option><option value="UTC-01:00">UTC-01:00</option><option value="UTC+00:00">UTC+00:00</option><option value="UTC+01:00">UTC+01:00</option><option value="UTC+02:00">UTC+02:00</option><option value="UTC+03:00">UTC+03:00</option><option value="UTC+03:30">UTC+03:30</option><option value="UTC+04:00">UTC+04:00</option><option value="UTC+04:30">UTC+04:30</option><option value="UTC+05:00">UTC+05:00</option><option value="UTC+05:30">UTC+05:30</option><option value="UTC+05:45">UTC+05:45</option><option value="UTC+06:00">UTC+06:00</option><option value="UTC+06:30">UTC+06:30</option><option value="UTC+07:00">UTC+07:00</option><option value="UTC+08:00">UTC+08:00</option><option value="UTC+08:45">UTC+08:45</option><option value="UTC+09:00">UTC+09:00</option><option value="UTC+09:30">UTC+09:30</option><option value="UTC+10:00">UTC+10:00</option><option value="UTC+10:30">UTC+10:30</option><option value="UTC+11:00">UTC+11:00</option><option value="UTC+12:00">UTC+12:00</option><option value="UTC+12:45">UTC+12:45</option><option value="UTC+13:00">UTC+13:00</option><option value="UTC+14:00">UTC+14:00</option></select><FiChevronDown className="select-icon" /></div></div>
//       </div>
//       <div className="form-field">
//         <label>Block Specific Dates</label>
//         <div className="input-with-icon-right">
//           <DatePicker selected={blockDateInput} placeholderText="Click to add blocked date" onChange={(date) => { setBlockDateInput(date); handleBlockDate(date); }} minDate={startDate} maxDate={endDate} className="styled-input datepicker-input" customInput={<CustomDatePickerInput placeholder="Click to add blocked date" />} />
//           <FiCalendar className="input-icon" />
//         </div>
//         <div className="blocked-dates-list">
//           {appointmentData.blockedDates.length > 0 ? (<ul>{appointmentData.blockedDates.map((dateStr, index) => (<motion.li key={dateStr} className="blocked-date-item" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }}><span>{formatDisplayDate(new Date(dateStr))}</span><motion.button type="button" onClick={() => removeBlockedDate(index)} className="remove-item-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FiTrash2 /></motion.button></motion.li>))}</ul>) : (<p className="field-note">No dates blocked yet.</p>)}
//         </div>
//       </div>
//     </div>
//   );
// };


// // --- FunnelEditorView Component (Main Application) ---
// const BASE_API_URL = 'http://localhost:3001/api/funnel';

// const ALL_AVAILABLE_STAGES = [
//   { id: 'portfolio-content', name: 'Portfolio Content', type: 'portfolio-editor', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
//   { id: 'sales-page-content', name: 'Sales Page Content', type: 'sales-editor', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> },
//   { id: 'main-video', name: 'Main Video Page', type: 'video-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 7V5l7-2v14"></path><path d="M16 21H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"></path></svg> },
//   { id: 'appointment', name: 'Appointment Page', type: 'appointment-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
//   { id: 'whatsapp-community', name: 'WhatsApp Community', type: 'whatsapp-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L2 22l1.7-4.1C1.9 15.1 1 11.5 1 7.5A8.5 8.5 0 0 1 10.5 1c4.1 0 7.6 3.9 8.3 7.8z"></path></svg> },
//   { id: 'payment-setup', name: 'Payment Setup', type: 'payment-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> },
//   { id: 'thank-you-page', name: 'Thank You Page', type: 'thank-you-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> },
//   { id: 'download-page', name: 'Download Page', type: 'download-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> },
//   { id: 'upsell-downsell-page', name: 'Upsell/Downsell Page', type: 'upsell-downsell-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 17 22 12 17 7"></polyline><polyline points="2 12 22 12"></polyline></svg> },
//   { id: 'webinar-replay-page', name: 'Webinar Replay Page', type: 'webinar-replay-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><polygon points="10 8 16 12 10 16 10 8"></polygon></svg> },
//   { id: 'contact-us-page', name: 'Contact Us Page', type: 'contact-us-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-3.67A19.79 19.79 0 0 1 2 3.18 2 2 0 0 1 4.18 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> },
//   { id: 'lead-magnet', name: 'Lead Magnet Page', type: 'lead-magnet-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> },
//   { id: 'call-booking', name: 'Call Booking Page', type: 'call-booking-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> },
//   { id: 'vsl-page', name: 'VSL Page', type: 'vsl-page', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> },
// ];

// const DEFAULT_FUNNEL_CONTENT = {
//   // Appearance settings that will be saved to the backend
//   appearance: {
//     themeId: 'fitness1',
//     colorTheme: 'blue',
//     mode: 'light',
//     funnelType: 'group-a',
//   },
//   // Portfolio Data
//   portfolio: {
//     headline: 'As a dedicated coach, I specialize in transforming lives through personalized fitness and nutrition plans.', bio: 'With over a decade of experience in web development, I build high-performance, responsive, and user-centric web applications. My passion lies in creating elegant solutions to complex problems.', specializations: [{ name: 'Strength Training' }, { name: 'Nutrition Coaching' }], experienceYears: 10, totalProjectsCompleted: 150, profileImages: [null, null, null], gallery: [], testimonials: [{ text: 'Amazing coach and mentor! Highly recommended.', image: null, name: 'John Doe' }], Partner_logo: [], logo_image: [{ name: 'React', image: null }], certificationIcons: [{ name: "Google Analytics", icon: null }], videoEmbedUrls: [{ yturl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }], customVideoUploads: [], training: [{ pic: null, text: "You want to lose weight and gain muscle efficiently." }], faqs: [{ id: 1, question: "Can I see your coaching success stories?", answer: "Yes! You can find them in the testimonials and case studies section of my portfolio." }],
//   },
//   // Sales Page Data
//   sales: {
//     topBarText: "🔥 Limited Time Offer - Scale Your Coaching Business To 5 Lakhs/Month!", heroTitle: "Scale your Coaching Business To the <span class='highlight'>5 Lakhs/Month PROFIT</span> Using Army Of <span class='ai-agents'>A.I. Agents</span>", heroSubtitle: "Zero Tech Method & Complete Time Freedom.", heroPills: ["NO Sales Calls", "NO Endless Content", "NO Begging in DMs"], videoPlaceholder: { name: "SHUBH JAIN", tagline: "From Employee to 40 CR+ Empire Builder", }, date: "June 28th - 30th", time: "7 PM - 9 PM", location: "Zoom", language: "English", implementationAgenda: { title: "Implementation Agenda:", items: ["How to Make 10 Lakhs or More in Sales in One Weekend Which Would Otherwise Take You Months to Hit!", "How To SELL Premium Offers Without Sales Calls & Close Effortlessly in 5 hours/month.", "How To Create a Buying Movement That Makes People Throw Credit Cards At You To Buy!"] }, clientShowcaseTitle: "Success Stories from My <span class='highlight'>Coaching Community</span>", clientShowcase: [{ name: 'Istik Nandakumar', position: 'Business and business growth expert', following: '44.7K+', image: 'https://antux-react.vercel.app/assets/img/illustration/1.png' }, { name: 'Ankit Neerav', position: 'Law of Attraction Coach', following: '24.3K+', image: 'https://antux-react.vercel.app/assets/img/about/1.jpg' }, { name: 'Shankar Kulkarni', position: 'Financial Freedom & Confidence Coach', following: '9.1K+', image: 'https://antux-react.vercel.app/assets/img/about/2.jpg' }], socialProofTitle: "Real Results from <span class='highlight'>Real People</span>", socialProofSubtitle: "See the transformation happening every single day in our community", handwrittenAnnotations: { top: "Look at these <span class='highlight-red-handwritten'>REAL results</span> from my students!", bottom: "This could be <span class='highlight-blue-handwritten'>YOUR success story</span> next!" }, reverseFunnelTitle: "The 5-Step <span class='highlight'>Success Blueprint</span>", reverseFunnelSubtitle: "Follow this exact process that helped 10,000+ people transform their lives", testimonialsTitle: "What My <span class='highlight'>Students Say</span>", testimonialfunnel: [{ picture: 'https://randomuser.me/api/portraits/men/32.jpg', text: "This program completely transformed my approach to business.", author: "Rajesh Kumar", company: "CEO, Tech Solutions" }, { picture: 'https://randomuser.me/api/portraits/women/44.jpg', text: "I was skeptical at first, but the strategies are pure gold.", author: "Priya Sharma", company: "Founder, Creative Co." },], tsunamiTitle: "Join The Success <span class='highlight'>Revolution</span>", tsunamiImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", tsunamiDescription: ["Over <strong>10,000+ students</strong> have transformed their lives using my proven methods and strategies.", "This isn't just another course - it's a <strong>complete life transformation system</strong> that works.",], whatIfCard: { title: "What if you could transform your life in just 90 days?", steps: ["Master the mindset of highly successful people", "Build your high-value offer that clients desperately want",] }, comparisonTable: { oldWay: { title: "The Old Way", subtitle: "Struggling alone without guidance", items: ["Trial and error approach", "Inconsistent results"] }, newWay: { title: "The New Way", subtitle: "With my proven system", items: ["Proven step-by-step system", "Consistent, predictable results"] } }, resultsAgendaTitle: "Your 3-Day <span class='highlight'>Transformation Journey</span>", resultdrivenagenda:[ { pic: null, heading: "Build", point1: "EXACT 4-Step High-Ticket Offer Creation Formula.", point2: "An ancient offer creation 'law' to make more sales.", point3: "Old-school offer strategy that crushes Cold Audience.", point4: "", point5: "" }, { pic: null, heading: "Sell", point1: "Your 'Reverse-math' to your NEXT 10 lakh payday.", point2: "7-Figure Launch Checklist used behind every BIG launch.", point3: "Battle-tested 5 Hour Engine for maximum sales.", point4: "", point5: "" }, { pic: null, heading: "Scale", point1: "My 40 crores 'Signature-Talk' Framework.", point2: "This #1 thing that pulls in 60% more sales.", point3: "How to create presentations that are guaranteed to CRUSH.", point4: "", point5: "" },], pricingTitle: "Choose Your <span class='highlight'>Success Package</span>", pricingTable: [{ tier: "Regular Price", price: "₹2,999", bonus: "Basic Package Only", isRecommended: false, badge: "" }, { tier: "Early Bird Special", price: "₹99", bonus: "+ ₹25,000 Worth of Exclusive Bonuses", isRecommended: true, badge: "ONLY 100 SEATS" },], currentPriceDisplay: { text: "Today Only Special Price:", oldPrice1: "₹2,999", oldPrice2: "₹999", currentPrice: "₹99" }, whoIsShubh: { title: "Meet Your <span class='highlight'>Success Mentor</span>", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", points: ["Built a ₹40+ crore coaching business from scratch", "Mentored 10,000+ students to achieve their dreams"] }, faqTitle: "Frequently Asked <span class='highlight'>Questions</span>", testimonialfaqs: [{ id: 1, question: "Can I see your coaching success stories?", answer: "Yes! I have helped numerous clients achieve their fitness goals. You can view testimonials and before/after photos in my portfolio section." }, { id: 2, question: "What are your nutrition coaching rates?", answer: "My coaching programs start at $99/month for basic nutrition plans. Customized programs with weekly check-ins start at $199/month." },], footerCopyright: `© ${new Date().getFullYear()} Success Academy. All rights reserved.`, footerDisclaimer: "Results shown are not typical and may vary. Success requires dedication, hard work, and consistent action."
//   },
//   // General Settings for Optional Stages
//   generalSettings: {
//      leadMagnet: { pageTitle: 'Get Your Free Lead Magnet', headline: 'Download Your Free [Lead Magnet Name]', description: 'Enter your details below to get instant access to this valuable resource.', offerImage: 'https://placehold.co/600x400/805ad5/ffffff?text=Lead+Magnet', formFields: [{ label: 'Name', type: 'text', required: true }, { label: 'Email', type: 'email', required: true }, { label: 'Phone (Optional)', type: 'tel', required: false }], thankYouMessage: 'Thank you! Your download is ready.', downloadUrl: 'https://example.com/your-lead-magnet.pdf' },
//     callBooking: { pageTitle: 'Book Your Strategy Call', headline: 'Schedule Your Free Strategy Session', description: 'Pick a time that works for you for a no-obligation consultation.', calendarEmbedCode: '', availabilityText: 'Available Monday-Friday, 9am-5pm', confirmationMessage: 'Your call has been booked! Check your email for details.' },
//     vslPage: { pageTitle: 'Video Sales Letter', headline: 'Discover How [Product] Can Transform Your [Result]', videoUrl: '', mainVideoUpload: null, keyPoints: ['The problem you\'re facing', 'How our solution works', 'The transformation you\'ll experience', 'What makes us different'], callToAction: { text: 'Get Started Now', link: 'https://example.com/checkout' } },
//     payment: { currency: 'INR', gateways: { stripe: { connected: false, apiKey: '' }, razorpay: { connected: false, keyId: '' } } },
//     whatsapp: { whatsappLink: '', communityDescription: '', pageTitle: 'Join Our WhatsApp Community', pageUrl: 'https://funnelseye.com/whatsapp-community', domain: 'www.youcantransform.com', pageTheme: 'Community Theme 1', },
//     mainVideo: { pageTitle: 'Watch Our Main Video', pageUrl: 'https://funnelseye.com/mainvideo', domain: 'www.youcantransform.com', pageTheme: 'Video Theme 1', videoUrl: '', mainVideoUpload: null, videoHeadline: 'Check out this amazing video!', },
//     appointment: { pageTitle: 'Book Your Appointment', pageUrl: 'https://funnelseye.com/appointment', domain: 'www.youcantransform.com', pageTheme: 'Booking Theme 1', calendarEmbedCode: '', appointmentHeadline: 'Schedule a Call With Us', availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], availableFromTime: '09:00', availableToTime: '17:00', slotDuration: 30, timeZone: 'UTC+05:30', blockedDates: [], availabilityRange: { startDate: new Date().toISOString(), endDate: null } },
//     thankYou: { pageTitle: 'Thank You for Your Purchase!', thankYouMessage: 'Your order has been successfully processed. An email with your details has been sent.', videoUrl: '', imageUrl: 'https://placehold.co/600x400/805ad5/ffffff?text=Thank+You+Image', socialShareText: 'I just got an amazing deal!', callToAction: { text: 'Join Our VIP Community!', link: 'https://example.com/vip-community' } },
//     download: { pageTitle: 'Your Download Is Ready!', introMessage: 'Click the links below to download your resources.', downloadItems: [{ name: 'Ebook: The Success Blueprint', fileUrl: 'https://example.com/ebook.pdf' }, { name: 'Workbook: Action Plan', fileUrl: 'https://example.com/workbook.zip' }] },
//     upsellDownsell: { pageTitle: 'Don\'t Miss This Exclusive Offer!', headline: 'Upgrade Your Journey Now for 10X Results!', offerDescription: 'This one-time offer is designed to accelerate your progress. Get access to advanced modules and private coaching.', offerPrice: '$497', callToAction: { text: 'Yes, Upgrade My Order!', link: 'https://example.com/upsell-checkout' }, noThanksText: 'No thanks, I\'ll stick with the basic offer.', downsellOffer: { active: false, headline: 'Wait! One Last Chance For You...', description: 'Get a stripped-down version of the offer at a lower price.', price: '$197', callToAction: { text: 'Get Downsell Offer', link: 'https://example.com/downsell-checkout' } } },
//     webinarReplay: { pageTitle: 'Webinar Replay: Master Your Coaching Business', webinarVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/your_webinar_replay_id" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', keyTakeaways: ['Learn the 5 core strategies for client acquisition.', 'Discover the secret to automating your sales process.', 'Understand how to scale your business to 7-figures.'], callToAction: { text: 'Enroll in the Full Program', link: 'https://example.com/full-program' } },
//     contactUs: { pageTitle: 'Contact Us', introMessage: 'Have questions? Reach out to us!', email: 'support@example.com', phone: '+1 (555) 123-4567', address: '123 Business Rd, Suite 100, City, Country', mapEmbedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2505677028945!2d144.9630578153163!3d-37.81627997975107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b91d9d9f5b%3A0x6b4c6e9f1a2d1a3c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678901234567!5m2=1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>', formFields: [{ label: 'Name', type: 'text', required: true }, { label: 'Email', type: 'email', required: true }, { label: 'Message', type: 'textarea', required: true }] }
//   }
// };

// const FunnelEditorView = () => {
//   // --- STATE MANAGEMENT ---
//   const [contentData, setContentData] = useState(DEFAULT_FUNNEL_CONTENT);
//   const [activeStageId, setActiveStageId] = useState('theme-selector');
//   const [activeFunnelContentTab, setActiveFunnelContentTab] = useState('hero');
//   const [activePortfolioContentTab, setActivePortfolioContentTab] = useState('basicInfo');
//   const [contentKey, setContentKey] = useState(0);
//   const funnel_name_data = useSelector(state => state.ui.edit_funnel_name_data);
//   const [stages, setStages] = useState([
//     { id: 'theme-selector', name: 'Theme & Appearance', type: 'theme', fixed: true },
//     { id: 'portfolio-content', name: 'Portfolio Content', type: 'portfolio-editor', fixed: true },
//   ]);
//   const [showAddStageModal, setShowAddStageModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [saveStatus, setSaveStatus] = useState('');
//   const [userId, setUserId] = useState(typeof __app_id !== 'undefined' ? __app_id : `user_${crypto.randomUUID().substring(0, 8)}`);

//   const activeStage = stages.find(s => s.id === activeStageId);

//   const [newPortfolioItems, setNewPortfolioItems] = useState({
//     specialization: '', galleryFile: null, testimonial: { text: '', image: null, name: '' }, videoEmbedUrl: '', newCustomVideoFile: null, faq: { question: '', answer: '' }, training: { pic: null, text: '' }, partnerLogoFile: null, certificationIcon: { name: '', icon: null },
//   });

//   // --- API FUNCTIONS ---
//   const saveFunnelData = async (dataToSave) => {
//     setIsLoading(true);
//     setSaveStatus('Saving...');
//     console.log('Saving data to backend:', { funnelId: userId, payload: dataToSave });
//     try {
//       const response = await fetch(`${BASE_API_URL}/${userId}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json', },
//         body: JSON.stringify(dataToSave),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
//       }
//       const result = await response.json();
//       console.log('Save successful:', result);
//       setSaveStatus('All changes saved!');
//       setTimeout(() => setSaveStatus(''), 2000);
//     } catch (error) {
//       console.error('Failed to save funnel:', error);
//       setSaveStatus(`Save Failed: ${error.message}`);
//       setTimeout(() => setSaveStatus(''), 3000);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const loadFunnelData = async (funnelId) => {
//     setIsLoading(true);
//     setSaveStatus('');
//     console.log(`Loading data for funnelId: ${funnelId}...`);
//     try {
//       const response = await fetch(`${BASE_API_URL}/${funnelId}`);
//       let loadedData;

//       if (response.ok) {
//         loadedData = await response.json();
//         console.log('Successfully loaded data from backend:', loadedData);
//         setSaveStatus('Data loaded successfully!');
//       } else if (response.status === 404) {
//         console.log('No existing funnel data found. Initializing with default content.');
//         loadedData = { content: DEFAULT_FUNNEL_CONTENT, stages: [] };
//         setSaveStatus('Loaded default template.');
//       } else {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       // Merge loaded content with defaults to prevent errors if some keys are missing
//       const contentToUse = { 
//         ...DEFAULT_FUNNEL_CONTENT, 
//         ...loadedData.content,
//         appearance: { ...DEFAULT_FUNNEL_CONTENT.appearance, ...loadedData.content?.appearance },
//         generalSettings: { ...DEFAULT_FUNNEL_CONTENT.generalSettings, ...loadedData.content?.generalSettings }
//       };
      
//       const loadedStages = loadedData?.stages || [];
      
//       // Ensure date strings are converted to Date objects for date pickers
//       if (contentToUse.generalSettings?.appointment?.availabilityRange?.startDate) {
//         contentToUse.generalSettings.appointment.availabilityRange.startDate = new Date(contentToUse.generalSettings.appointment.availabilityRange.startDate);
//       }
//        if (contentToUse.generalSettings?.appointment?.availabilityRange?.endDate) {
//         contentToUse.generalSettings.appointment.availabilityRange.endDate = new Date(contentToUse.generalSettings.appointment.availabilityRange.endDate);
//       }
      
//       setContentData(contentToUse);

//       // Reconstruct stages based on loaded theme
//       const newStages = [{ id: 'theme-selector', name: 'Theme & Appearance', type: 'theme', fixed: true }];
//       const themeId = contentToUse.appearance.themeId;
//       let primaryEditorId = 'portfolio-content'; // default

//       if (themeId === 'businessPro') {
//         primaryEditorId = 'sales-page-content';
//       }
      
//       const primaryEditorConfig = ALL_AVAILABLE_STAGES.find(s => s.id === primaryEditorId);
//       if (primaryEditorConfig) {
//           newStages.push({ ...primaryEditorConfig, fixed: true });
//       }

//       // Add back any previously saved optional stages
//       loadedStages.forEach(loadedStage => {
//         const stageConfig = ALL_AVAILABLE_STAGES.find(s => s.id === loadedStage.id);
//         if (stageConfig && !stageConfig.fixed && !newStages.some(s => s.id === loadedStage.id)) {
//           newStages.push({ ...stageConfig, fixed: false });
//         }
//       });
      
//       setStages(newStages);
//       setActiveStageId(newStages.length > 1 ? newStages[1].id : 'theme-selector');

//     } catch (error) {
//       console.error('Failed to load funnel:', error);
//       setSaveStatus('Load Failed! Using default data.');
//       setContentData(DEFAULT_FUNNEL_CONTENT);
//       setStages([
//         { id: 'theme-selector', name: 'Theme & Appearance', type: 'theme', fixed: true },
//         { id: 'portfolio-content', name: 'Portfolio Content', type: 'portfolio-editor', fixed: true },
//       ]);
//       setActiveStageId('portfolio-content');
//     } finally {
//       setIsLoading(false);
//       setTimeout(() => setSaveStatus(''), 2000);
//       setContentKey(k => k + 1);
//     }
//   };

//   useEffect(() => {
//     const idToLoad = funnel_name_data || userId;
//     if (idToLoad) {
//         loadFunnelData(idToLoad);
//     }
//   }, [funnel_name_data, userId]);


//   // --- TABS CONFIGURATION ---
//   const funnelContentTabs = [ { id: 'hero', label: 'Hero Section', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg> }, { id: 'clients', label: 'Client Showcase', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> }, { id: 'socialProof', label: 'Social Proof', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> }, { id: 'testimonials', label: 'Testimonials', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L2 22l1.7-4.1C1.9 15.1 1 11.5 1 7.5A8.5 8.5 0 0 1 10.5 1c4.1 0 7.6 3.9 8.3 7.8z"></path></svg> }, { id: 'agenda', label: 'Results Agenda', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> }, { id: 'contentBlocks', label: 'Content Blocks', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.13 12 11 20.73 6.13"></polyline><line x1="12" y1="22.78" x2="12" y2="11"></line></svg> }, { id: 'pricing', label: 'Pricing', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> }, { id: 'about', label: 'About Section', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> }, { id: 'faq', label: 'FAQ', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> }, { id: 'general', label: 'General & Footer', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15z"></path></svg> }, ];
//   const portfolioContentTabs = [ { id: 'basicInfo', label: 'Basic Information', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> }, { id: 'specializations', label: 'Specializations', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> }, { id: 'gallery', label: 'Gallery', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> }, { id: 'testimonials', label: 'Testimonials', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L2 22l1.7-4.1C1.9 15.1 1 11.5 1 7.5A8.5 8.5 0 0 1 10.5 1c4.1 0 7.6 3.9 8.3 7.8z"></path></svg> }, { id: 'videos', label: 'Videos', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 7V5l7-2v14"></path><path d="M16 21H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"></path></svg> }, { id: 'partnerLogos', label: 'Partner Logos', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> }, { id: 'certificationIcons', label: 'Certifications', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg> }, { id: 'training', label: 'Training Info', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> }, { id: 'faqs', label: 'FAQs', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> }, ];

//   // --- GENERIC CONTENT HANDLERS ---
//   const handleContentDataChange = (category, key, value) => setContentData(prev => ({ ...prev, [category]: { ...prev[category], [key]: value } }));
  
//   const handleContentNestedChange = (category, path, value) => {
//     setContentData(prev => {
//       const newContentData = JSON.parse(JSON.stringify(prev));
//       const keys = path.split('.');
//       let current = newContentData[category];
//       for (let i = 0; i < keys.length - 1; i++) {
//         current = current[keys[i]];
//       }
//       current[keys[keys.length - 1]] = value;
//       return newContentData;
//     });
//   };

//   const handleContentArrayChange = (category, arrayPath, index, field, value) => {
//     setContentData(prev => {
//       const newContentData = JSON.parse(JSON.stringify(prev));
//       const keys = arrayPath.split('.');
//       let currentArray = newContentData[category];
//       for (let i = 0; i < keys.length - 1; i++) {
//         currentArray = currentArray[keys[i]];
//       }
//       const targetArray = currentArray[keys[keys.length - 1]];
//       if (field) {
//         targetArray[index][field] = value;
//       } else {
//         targetArray[index] = value;
//       }
//       return newContentData;
//     });
//   };

//   const addContentItem = (category, arrayPath, newItem) => {
//     setContentData(prev => {
//       const newContentData = JSON.parse(JSON.stringify(prev));
//       const keys = arrayPath.split('.');
//       let current = newContentData[category];
//       for (let i = 0; i < keys.length - 1; i++) {
//         current = current[keys[i]];
//       }
//       const targetArray = current[keys[keys.length - 1]] || [];
//       current[keys[keys.length - 1]] = [...targetArray, newItem];
//       return newContentData;
//     });
//   };

//   const removeContentItem = (category, arrayPath, index) => {
//     setContentData(prev => {
//       const newContentData = JSON.parse(JSON.stringify(prev));
//       const keys = arrayPath.split('.');
//       let parent = newContentData[category];
//       for (let i = 0; i < keys.length - 1; i++) {
//         parent = parent[keys[i]];
//       }
//       const arrayName = keys[keys.length - 1];
//       parent[arrayName] = parent[arrayName].filter((_, i) => i !== index);
//       return newContentData;
//     });
//   };

//   const handleFileUpload = (category, path, file) => {
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => handleContentNestedChange(category, path, reader.result);
//       reader.readAsDataURL(file);
//     } else {
//       handleContentNestedChange(category, path, null);
//     }
//   };

//   // --- PORTFOLIO-SPECIFIC HANDLERS ---
//   const handlePortfolioInputChange = (e) => handleContentDataChange('portfolio', e.target.name, e.target.value);
//   const handlePortfolioArrayItemChange = (arrayName, index, field, value) => handleContentArrayChange('portfolio', arrayName, index, field, value);
//   const addPortfolioItem = (arrayName, newItemObject) => addContentItem('portfolio', arrayName, newItemObject);
//   const removePortfolioItem = (arrayName, index) => removeContentItem('portfolio', arrayName, index);
//   const handlePortfolioFileUpload = (file, arrayName, index, fieldName) => {
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (arrayName === 'profileImages') {
//           const newProfileImages = [...contentData.portfolio.profileImages];
//           newProfileImages[index] = reader.result;
//           handleContentDataChange('portfolio', 'profileImages', newProfileImages);
//         } else {
//           handlePortfolioArrayItemChange(arrayName, index, fieldName, reader.result);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleNewPortfolioItemChange = (section, field, value) => {
//     if (typeof newPortfolioItems[section] === 'object' && newPortfolioItems[section] !== null && field) {
//       setNewPortfolioItems(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
//     } else {
//       setNewPortfolioItems(prev => ({ ...prev, [section]: value }));
//     }
//   };

//   // --- THEME & STAGE MANAGEMENT ---
//   const handleThemeChange = (themeId) => {
//     handleContentNestedChange('appearance', 'themeId', themeId);

//     setStages(prevStages => {
//       const fixedStages = prevStages.filter(s => s.id === 'theme-selector');
//       const optionalStages = prevStages.filter(s => !s.fixed);
      
//       let primaryEditorConfig;
//       let newActiveStageId;

//       if (themeId === 'fitness1') {
//         primaryEditorConfig = ALL_AVAILABLE_STAGES.find(s => s.id === 'portfolio-content');
//         newActiveStageId = 'portfolio-content';
//       } else if (themeId === 'businessPro') {
//         primaryEditorConfig = ALL_AVAILABLE_STAGES.find(s => s.id === 'sales-page-content');
//         newActiveStageId = 'sales-page-content';
//       } else {
//         primaryEditorConfig = ALL_AVAILABLE_STAGES.find(s => s.id === 'portfolio-content'); // Default to portfolio
//         newActiveStageId = 'portfolio-content';
//       }

//       const newStages = [...fixedStages];
//       if (primaryEditorConfig) {
//         newStages.push({ ...primaryEditorConfig, fixed: true });
//       }
//       newStages.push(...optionalStages);

//       setActiveStageId(newActiveStageId);
//       return newStages;
//     });
//     setContentKey(k => k + 1);
//   };
  
//   // --- RENDER FUNCTIONS FOR EACH STAGE TYPE ---
//   const renderThemeSelectorContent = () => {
//     const funnelTypes = [ { id: 'group-a', name: 'Group A - Calendar', description: 'For appointment booking funnels' }, { id: 'group-b', name: 'Group B - Payment', description: 'For direct sales funnels' }, { id: 'group-c', name: 'Group C - Free Meeting', description: 'For consultation booking funnels' }, { id: 'group-d', name: 'Group D - Lead Magnet', description: 'For lead generation funnels' } ];
//     const colorThemes = [ { id: 'blue', name: 'Blue Theme', color: '#3b82f6' }, { id: 'purple', name: 'Purple Theme', color: '#8b5cf6' }, { id: 'red', name: 'Red Theme', color: '#ef4444' }, { id: 'green', name: 'Green Theme', color: '#10b981' }, { id: 'indigo', name: 'Indigo Theme', color: '#6366f1' }, { id: 'pink', name: 'Pink Theme', color: '#ec4899' }, { id: 'orange', name: 'Orange Theme', color: '#f97316' }, { id: 'teal', name: 'Teal Theme', color: '#14b8a6' } ];
//     const themes = [ { id: 'fitness1', name: 'Fitness Theme 1', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }, { id: 'businessPro', name: 'Business Pro', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDBwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' }, { id: 'cleanModern', name: 'Clean Modern', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDBwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }, { id: 'startupBoost', name: 'Startup Boost', image: 'https://images.unsplash.com/photo-1600880292210-352bb62b1a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDBwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }, ];
    
//     return ( 
//     <div className="content-section"> 
//       <h3 className="section-title">Funnel Configuration</h3> 
//       <div className="form-field"> 
//         <label>Select Funnel Type</label> 
//         <div className="funnel-types-grid"> {funnelTypes.map(type => ( 
          
//           <div key={type.id} className={`funnel-type-card ${contentData.appearance.funnelType === type.id ? 'active' : ''}`} onClick={() => handleContentNestedChange('appearance', 'funnelType', type.id)}> 
//             <h4>{type.name}</h4> <p>{type.description}</p> 
//           </div> ))} 
//         </div> 
//       </div> 
//       <h3 className="section-title">Select Theme</h3> 
//       <div className="theme-selection-container"> {themes.map((theme) => ( 
//         <div key={theme.id} className={`theme-card ${contentData.appearance.themeId === theme.id ? 'active' : ''}`} onClick={() => handleThemeChange(theme.id)}> 
//           <img src={theme.image} alt={theme.name} className="theme-image" /> 
//           <div className="theme-name-overlay"><span className="theme-name">{theme.name}</span></div> 
//         </div> ))} 
//       </div> 
//       <h3 className="section-title">Select Color Theme</h3> 
//       <div className="color-themes-grid"> {colorThemes.map(color => ( 
//         <div key={color.id} className={`color-theme-card ${contentData.appearance.colorTheme === color.id ? 'active' : ''}`} style={{ backgroundColor: color.color }} onClick={() => handleContentNestedChange('appearance', 'colorTheme', color.id)} > 
//           <span className="color-theme-name">{color.name}</span> 
//         </div> ))} 
//       </div> 
//       <h3 className="section-title">Select Mode</h3> 
//       <div className="mode-selection-container"> 
//         <button type="button" className={`mode-button ${contentData.appearance.mode === 'light' ? 'active' : ''}`} onClick={() => handleContentNestedChange('appearance', 'mode', 'light')}> 
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> Light 
//         </button> 
//         <button type="button" className={`mode-button ${contentData.appearance.mode === 'dark' ? 'active' : ''}`} onClick={() => handleContentNestedChange('appearance', 'mode', 'dark')}> 
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> Dark 
//         </button> 
//       </div> 
//     </div> );
//   };

//   const renderSalesPageContent = () => {
//     const data = contentData.sales;
//     const renderListEditor = (arrayKey, itemSchema, title, allowAdd = true) => (
//       <>
//         <h4 className="subsection-title">{title}</h4>
//         {(data[arrayKey] || []).map((item, index) => (
//           <div key={index} className="list-item-card">
//             <div className="list-item-content">
//               {Object.keys(itemSchema).map(field => {
//                 const isBooleanField = typeof item[field] === 'boolean';
//                 if (isBooleanField) {
//                   return (
//                     <div key={field} className="form-field-inline">
//                       <label className="inline-flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={item[field]}
//                           onChange={e => handleContentArrayChange('sales', arrayKey, index, field, e.target.checked)}
//                           className="form-checkbox"
//                         />
//                         <span className="ml-2">{itemSchema[field]}</span>
//                       </label>
//                     </div>
//                   );
//                 }
//                 return (
//                   <div key={field}>
//                     <label className="field-label-sm">{itemSchema[field]}</label>
//                     <input
//                       type="text"
//                       value={item[field] || ''}
//                       onChange={e => handleContentArrayChange('sales', arrayKey, index, field, e.target.value)}
//                       className="styled-input"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//             <button type="button" onClick={() => removeContentItem('sales', arrayKey, index)} className="remove-item-button"><FiTrash2 /></button>
//           </div>
//         ))}
//         {allowAdd && <button type="button" onClick={() => {
//           const newItem = Object.fromEntries(Object.keys(itemSchema).map(k => {
//             const defaultValue = typeof (data[arrayKey]?.[0]?.[k]) === 'boolean' ? false : '';
//             return [k, defaultValue];
//           }));
//           addContentItem('sales', arrayKey, newItem);
//         }} className="button-secondary"><FiPlus /> Add Item</button>}
//       </>
//     );

//     const renderSimpleListEditor = (arrayKey, title, allowAdd = true) => ( <> <h4 className="subsection-title">{title}</h4> {data[arrayKey] && data[arrayKey].map((item, index) => ( <div key={index} className="list-item-card"> <input type="text" value={item} onChange={e => handleContentArrayChange('sales', arrayKey, index, null, e.target.value)} className="styled-input"/> <button type="button" onClick={() => removeContentItem('sales', arrayKey, index)} className="remove-item-button"><FiTrash2 /></button> </div> ))} {allowAdd && <button type="button" onClick={() => addContentItem('sales', arrayKey, '')} className="button-secondary"><FiPlus /> Add Item</button>} </> );
//     switch (activeFunnelContentTab) {
//       case 'hero': return ( <div className="content-section"> <h3 className="section-title">Hero Section</h3> <p className="field-note">Use HTML tags like `&lt;span class='highlight'&gt;` for special styling.</p> <div className="form-field"><label>Hero Title</label><textarea value={data.heroTitle} onChange={e => handleContentDataChange('sales', 'heroTitle', e.target.value)} className="styled-textarea" rows={3}/></div> <div className="form-field"><label>Hero Subtitle</label><input type="text" value={data.heroSubtitle} onChange={e => handleContentDataChange('sales', 'heroSubtitle', e.target.value)} className="styled-input"/></div> {renderSimpleListEditor('heroPills', 'Hero Pills')} <h4 className="subsection-title">Event Details</h4> <div className="form-grid"> <div className="form-field"><label>Date</label><input type="text" value={data.date} onChange={e => handleContentDataChange('sales', 'date', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Time</label><input type="text" value={data.time} onChange={e => handleContentDataChange('sales', 'time', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Location</label><input type="text" value={data.location} onChange={e => handleContentDataChange('sales', 'location', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Language</label><input type="text" value={data.language} onChange={e => handleContentDataChange('sales', 'language', e.target.value)} className="styled-input"/></div> </div> </div> );
//       case 'clients': return ( <div className="content-section"> <h3 className="section-title">Client Showcase</h3> <div className="form-field"><label>Section Title</label><input type="text" value={data.clientShowcaseTitle} onChange={e => handleContentDataChange('sales', 'clientShowcaseTitle', e.target.value)} className="styled-input"/></div> {renderListEditor('clientShowcase', { name: 'Name', position: 'Position', image: 'Image URL', following: 'Following Count' }, 'Clients')} </div> );
//       case 'socialProof': return ( <div className="content-section"> <h3 className="section-title">Social Proof</h3> <div className="form-field"><label>Title</label><textarea value={data.socialProofTitle} onChange={e => handleContentDataChange('sales', 'socialProofTitle', e.target.value)} className="styled-textarea" rows={2}/></div> <div className="form-field"><label>Subtitle</label><textarea value={data.socialProofSubtitle} onChange={e => handleContentDataChange('sales', 'socialProofSubtitle', e.target.value)} className="styled-textarea" rows={2}/></div> <h4 className="subsection-title">Handwritten Annotations</h4> <div className="form-field"><label>Top Annotation</label><textarea value={data.handwrittenAnnotations.top} onChange={e => handleContentNestedChange('sales', 'handwrittenAnnotations.top', e.target.value)} className="styled-textarea" rows={2}/></div> <div className="form-field"><label>Bottom Annotation</label><textarea value={data.handwrittenAnnotations.bottom} onChange={e => handleContentNestedChange('sales', 'handwrittenAnnotations.bottom', e.target.value)} className="styled-textarea" rows={2}/></div> </div> );
//       case 'testimonials': return ( <div className="content-section"> <h3 className="section-title">Student Testimonials</h3> <div className="form-field"><label>Section Title</label><input type="text" value={data.testimonialsTitle} onChange={e => handleContentDataChange('sales', 'testimonialsTitle', e.target.value)} className="styled-input"/></div> {renderListEditor('testimonialfunnel', { picture: 'Picture URL', text: 'Testimonial Text', author: 'Author', company: 'Company' }, 'Testimonials')} </div> );
//       case 'agenda': return ( <div className="content-section"> <h3 className="section-title">Results Driven Agenda</h3> <div className="form-field"><label>Section Title</label><input type="text" value={data.resultsAgendaTitle} onChange={e => handleContentDataChange('sales', 'resultsAgendaTitle', e.target.value)} className="styled-input"/></div> {(data.resultdrivenagenda || []).map((item, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <label className="field-label-sm">Day {index + 1} Heading</label><input type="text" value={item.heading} onChange={e => handleContentArrayChange('sales', 'resultdrivenagenda', index, 'heading', e.target.value)} className="styled-input"/> {[1,2,3,4,5].map(pNum => (<div key={pNum}><label className="field-label-sm">Point {pNum}</label><textarea value={item[`point${pNum}`]} onChange={e => handleContentArrayChange('sales', 'resultdrivenagenda', index, `point${pNum}`, e.target.value)} className="styled-textarea" rows={2}/></div>))} </div> <button type="button" onClick={() => removeContentItem('sales', 'resultdrivenagenda', index)} className="remove-item-button"><FiTrash2 /></button> </div> ))} <button type="button" onClick={() => addContentItem('sales', 'resultdrivenagenda', { heading: '', point1: '', point2: '', point3: '', point4: '', point5: '' })} className="button-secondary"><FiPlus /> Add Day</button> </div> );
//       case 'contentBlocks': return ( <div className="content-section"> <h3 className="section-title">Content Blocks</h3> <div className="form-field"><label>Reverse Funnel Title</label><input type="text" value={data.reverseFunnelTitle} onChange={e => handleContentDataChange('sales', 'reverseFunnelTitle', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Reverse Funnel Subtitle</label><input type="text" value={data.reverseFunnelSubtitle} onChange={e => handleContentDataChange('sales', 'reverseFunnelSubtitle', e.target.value)} className="styled-input"/></div> <h4 className="subsection-title">Tsunami Section</h4> <div className="form-field"><label>Tsunami Section Title</label><input type="text" value={data.tsunamiTitle} onChange={e => handleContentDataChange('sales', 'tsunamiTitle', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Tsunami Image URL</label><input type="text" value={data.tsunamiImage} onChange={e => handleContentDataChange('sales', 'tsunamiImage', e.target.value)} className="styled-input"/></div> {renderSimpleListEditor('tsunamiDescription', 'Tsunami Description Points')} <h4 className="subsection-title">What If Card</h4> <div className="form-field"><label>Card Title</label><input type="text" value={data.whatIfCard.title} onChange={e => handleContentNestedChange('sales', 'whatIfCard.title', e.target.value)} className="styled-input"/></div> {renderSimpleListEditor('whatIfCard.steps', 'What If Steps')} <h4 className="subsection-title">Comparison Table</h4> <div className="form-grid"> <div><label>Old Way Title</label><input type="text" value={data.comparisonTable.oldWay.title} onChange={e => handleContentNestedChange('sales', 'comparisonTable.oldWay.title', e.target.value)} className="styled-input"/></div> <div><label>Old Way Subtitle</label><input type="text" value={data.comparisonTable.oldWay.subtitle} onChange={e => handleContentNestedChange('sales', 'comparisonTable.oldWay.subtitle', e.target.value)} className="styled-input"/></div> </div> {renderSimpleListEditor('comparisonTable.oldWay.items', 'Old Way Points')} <div className="form-grid" style={{marginTop: '1rem'}}> <div><label>New Way Title</label><input type="text" value={data.comparisonTable.newWay.title} onChange={e => handleContentNestedChange('sales', 'comparisonTable.newWay.title', e.target.value)} className="styled-input"/></div> <div><label>New Way Subtitle</label><input type="text" value={data.comparisonTable.newWay.subtitle} onChange={e => handleContentNestedChange('sales', 'comparisonTable.newWay.subtitle', e.target.value)} className="styled-input"/></div> </div> {renderSimpleListEditor('comparisonTable.newWay.items', 'New Way Points')} </div> );
//       case 'pricing': return ( <div className="content-section"> <h3 className="section-title">Pricing Section</h3> <div className="form-field"><label>Section Title</label><input type="text" value={data.pricingTitle} onChange={e => handleContentDataChange('sales', 'pricingTitle', e.target.value)} className="styled-input"/></div> {renderListEditor('pricingTable', { tier: 'Tier Name', price: 'Price', bonus: 'Bonus Text', isRecommended: 'Recommended', badge: 'Badge (Optional)' }, 'Pricing Tiers')} <h4 className="subsection-title">Current Price Display</h4> <div className="form-grid"> <div className="form-field"><label>Display Text</label><input type="text" value={data.currentPriceDisplay.text} onChange={e => handleContentNestedChange('sales', 'currentPriceDisplay.text', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Strikethrough Price 1</label><input type="text" value={data.currentPriceDisplay.oldPrice1} onChange={e => handleContentNestedChange('sales', 'currentPriceDisplay.oldPrice1', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Strikethrough Price 2</label><input type="text" value={data.currentPriceDisplay.oldPrice2} onChange={e => handleContentNestedChange('sales', 'currentPriceDisplay.oldPrice2', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Current Price</label><input type="text" value={data.currentPriceDisplay.currentPrice} onChange={e => handleContentNestedChange('sales', 'currentPriceDisplay.currentPrice', e.target.value)} className="styled-input"/></div> </div> </div> );
//       case 'about': return ( <div className="content-section"> <h3 className="section-title">About Section</h3> <div className="form-field"><label>Section Title</label><input type="text" value={data.whoIsShubh.title} onChange={e => handleContentNestedChange('sales', 'whoIsShubh.title', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Image URL</label><input type="text" value={data.whoIsShubh.image} onChange={e => handleContentNestedChange('sales', 'whoIsShubh.image', e.target.value)} className="styled-input"/></div> {renderSimpleListEditor('whoIsShubh.points', 'Bullet Points')} </div> );
//       case 'faq': return ( <div className="content-section"> <h3 className="section-title">FAQ Section</h3> <div className="form-field"><label>Section Title</label><input type="text" value={data.faqTitle} onChange={e => handleContentDataChange('sales', 'faqTitle', e.target.value)} className="styled-input"/></div> {renderListEditor('testimonialfaqs', { question: 'Question', answer: 'Answer' }, 'FAQs')} </div> );
//       case 'general': return ( <div className="content-section"> <h3 className="section-title">General & Footer</h3> <div className="form-field"><label>Top Bar Text</label><input type="text" value={data.topBarText} onChange={e => handleContentDataChange('sales', 'topBarText', e.target.value)} className="styled-input"/></div> <h4 className="subsection-title">Footer</h4> <div className="form-field"><label>Copyright Text</label><input type="text" value={data.footerCopyright} onChange={e => handleContentDataChange('sales', 'footerCopyright', e.target.value)} className="styled-input"/></div> <div className="form-field"><label>Disclaimer Text</label><textarea value={data.footerDisclaimer} onChange={e => handleContentDataChange('sales', 'footerDisclaimer', e.target.value)} className="styled-textarea" rows={3}/></div> </div> );
//       default: return <div className="placeholder-content">Select a section to edit.</div>;
//     }
//   };

//   const renderPortfolioEditorContent = () => { const pData = contentData.portfolio; const renderCurrentTab = () => { switch (activePortfolioContentTab) { case 'basicInfo': return ( <div className="content-section"> <h3 className="section-title">Basic Information</h3> <div className="form-grid"> <div className="form-field full-width"> <label>Headline</label> <textarea name="headline" value={pData.headline} onChange={handlePortfolioInputChange} rows={3} className="styled-textarea" placeholder="Your professional headline"/> </div> <div className="form-field full-width"> <label>Bio</label> <textarea name="bio" value={pData.bio} onChange={handlePortfolioInputChange} rows={6} className="styled-textarea" placeholder="Tell your professional story"/> </div> <div className="form-field"> <label>Years of Experience</label> <input type="number" name="experienceYears" value={pData.experienceYears} onChange={handlePortfolioInputChange} className="styled-input" min="0"/> </div> <div className="form-field"> <label>Total Projects Completed</label> <input type="number" name="totalProjectsCompleted" value={pData.totalProjectsCompleted} onChange={handlePortfolioInputChange} className="styled-input" min="0"/> </div> <div className="form-field full-width"> <label>Profile Images</label> <p className="field-note">Upload 3 high-quality profile images (Recommended: 800x1000px).</p> <div className="profile-images-grid"> {[0, 1, 2].map((index) => ( <div key={index} className="profile-image-uploader"> <label className="file-upload-label"> {pData.profileImages[index] ? ( <img src={pData.profileImages[index]} alt={`Profile ${index + 1}`} className="profile-image-preview"/> ) : ( <div className="upload-placeholder"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg><span>Upload Image</span> </div> )} <input type="file" accept="image/*" onChange={(e) => handlePortfolioFileUpload(e.target.files[0], 'profileImages', index)} className="file-input-hidden"/> </label> {pData.profileImages[index] && ( <button type="button" onClick={() => { const newProfileImages = [...pData.profileImages]; newProfileImages[index] = null; handleContentDataChange('portfolio', 'profileImages', newProfileImages); }} className="remove-media-button small"> <FiTrash2 /> </button> )} </div> ))} </div> </div> </div> </div> ); case 'specializations': return ( <div className="content-section"> <h3 className="section-title">Specializations</h3> <div className="list-items-container"> {(pData.specializations || []).map((spec, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <input type="text" value={spec.name} onChange={(e) => handlePortfolioArrayItemChange('specializations', index, 'name', e.target.value)} placeholder="Specialization Name" className="styled-input" /> </div> <div className="list-item-actions"> <button type="button" onClick={() => removePortfolioItem('specializations', index)} className="remove-item-button" > <FiTrash2 /> </button> </div> </div> ))} </div> <div className="add-item-form"> <input type="text" value={newPortfolioItems.specialization} onChange={(e) => handleNewPortfolioItemChange('specialization', null, e.target.value)} placeholder="New specialization" className="styled-input" /> <button type="button" onClick={() => { addPortfolioItem('specializations', { name: newPortfolioItems.specialization }); handleNewPortfolioItemChange('specialization', null, ''); }} className="button-primary" > <FiPlus /> Add Specialization </button> </div> </div> ); case 'testimonials': return ( <div className="content-section"> <h3 className="section-title">Client Testimonials</h3> <div className="list-items-container"> {(pData.testimonials || []).map((testimonial, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <textarea placeholder="Testimonial text" value={testimonial.text} onChange={e => handlePortfolioArrayItemChange('testimonials', index, 'text', e.target.value)} rows={3} className="styled-textarea" /> <input type="text" placeholder="Client Name" value={testimonial.name} onChange={e => handlePortfolioArrayItemChange('testimonials', index, 'name', e.target.value)} className="styled-input" /> </div> <div className="list-item-actions"> <label className="file-upload-button-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> <input type="file" accept="image/*" onChange={(e) => handlePortfolioFileUpload(e.target.files[0], 'testimonials', index, 'image')} className="file-input-hidden" /> </label> {testimonial.image && <img src={testimonial.image} alt="Client" className="list-item-thumbnail" />} <button type="button" onClick={() => removePortfolioItem('testimonials', index)} className="remove-item-button" > <FiTrash2 /> </button> </div> </div> ))} </div> <div className="add-item-form"> <h4 className="add-item-title">Add New Testimonial</h4> <textarea placeholder="Testimonial text" value={newPortfolioItems.testimonial.text} onChange={e => handleNewPortfolioItemChange('testimonial', 'text', e.target.value)} rows={3} className="styled-textarea" /> <input type="text" placeholder="Client Name" value={newPortfolioItems.testimonial.name} onChange={e => handleNewPortfolioItemChange('testimonial', 'name', e.target.value)} className="styled-input" /> <div className="add-item-footer"> <label className="file-upload-button"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload Image <input type="file" accept="image/*" onChange={(e) => { if (e.target.files[0]) { handleNewPortfolioItemChange('testimonial', 'image', e.target.files[0]); } }} className="file-input-hidden" /> </label> <button type="button" onClick={() => { const fileToProcess = newPortfolioItems.testimonial.image; const newItem = { text: newPortfolioItems.testimonial.text, name: newPortfolioItems.testimonial.name, image: null }; const newIndex = (pData.testimonials || []).length; addPortfolioItem('testimonials', newItem); if (fileToProcess instanceof File) { const reader = new FileReader(); reader.onloadend = () => handlePortfolioArrayItemChange('testimonials', newIndex, 'image', reader.result); reader.readAsDataURL(fileToProcess); } setNewPortfolioItems(prev => ({ ...prev, testimonial: { text: '', name: '', image: null } })); }} className="button-primary" > <FiPlus /> Add Testimonial </button> </div> </div> </div> ); case 'gallery': return ( <div className="content-section"> <h3 className="section-title">Gallery</h3> <div className="gallery-grid"> {(pData.gallery || []).map((imgSrc, index) => ( <div key={index} className="gallery-item"> <img src={imgSrc} alt={`Gallery item ${index + 1}`} className="gallery-image" /> <button type="button" onClick={() => removePortfolioItem('gallery', index)} className="remove-media-button small" > <FiTrash2 /> </button> </div> ))} </div> <div className="add-item-form"> <label className="file-upload-button"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload Image <input type="file" accept="image/*" onChange={(e) => { if (e.target.files[0]) { const reader = new FileReader(); reader.onloadend = () => { addPortfolioItem('gallery', reader.result); }; reader.readAsDataURL(e.target.files[0]); } }} className="file-input-hidden" /> </label> </div> </div> ); case 'videos': return ( <div className="content-section"> <h3 className="section-title">Videos</h3> <h4 className="subsection-title">Embedded Videos</h4> <p className="field-note">Embed YouTube/Vimeo videos using their iframe embed code.</p> {(pData.videoEmbedUrls || []).map((video, index) => ( <div key={`embed-${index}`} className="list-item-card"> <textarea placeholder="Video Embed URL (e.g., iframe code)" value={video.yturl} onChange={e => handlePortfolioArrayItemChange('videoEmbedUrls', index, 'yturl', e.target.value)} rows={4} className="styled-textarea" /> <button type="button" onClick={() => removePortfolioItem('videoEmbedUrls', index)} className="remove-item-button" > <FiTrash2 /> </button> </div> ))} <div className="add-item-form"> <textarea placeholder="New Video Embed URL (e.g., YouTube iframe src code)" value={newPortfolioItems.videoEmbedUrl} onChange={e => handleNewPortfolioItemChange('videoEmbedUrl', null, e.target.value)} rows={4} className="styled-textarea" /> <button type="button" onClick={() => { addPortfolioItem('videoEmbedUrls', { yturl: newPortfolioItems.videoEmbedUrl }); handleNewPortfolioItemChange('videoEmbedUrl', null, ''); }} className="button-primary" > <FiPlus /> Add Video Embed </button> </div> <h4 className="subsection-title" style={{marginTop: '2rem'}}>Custom Video Uploads</h4> <p className="field-note">Upload your own video files (e.g., MP4).</p> {(pData.customVideoUploads || []).map((videoSrc, index) => ( <div key={`custom-${index}`} className="list-item-card"> <div className="video-preview-wrapper"> <video controls src={videoSrc} className="video-preview"> Your browser does not support the video tag. </video> </div> <button type="button" onClick={() => removePortfolioItem('customVideoUploads', index)} className="remove-item-button" > <FiTrash2 /> Remove Video </button> </div> ))} <div className="add-item-form"> <label className="file-upload-button"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload Custom Video <input type="file" accept="video/*" onChange={(e) => { if (e.target.files[0]) { handleNewPortfolioItemChange('newCustomVideoFile', null, e.target.files[0]); } }} className="file-input-hidden" /> </label> <button type="button" onClick={() => { const fileToProcess = newPortfolioItems.newCustomVideoFile; if (fileToProcess instanceof File) { const reader = new FileReader(); reader.onloadend = () => { addPortfolioItem('customVideoUploads', reader.result); setNewPortfolioItems(prev => ({ ...prev, newCustomVideoFile: null })); }; reader.readAsDataURL(fileToProcess); } else { console.log('Please select a video file to upload.'); } }} className="button-primary" > <FiPlus /> Add Custom Video </button> </div> </div> ); case 'partnerLogos': return ( <div className="content-section"> <h3 className="section-title">Partner Logos</h3> <div className="gallery-grid"> {(pData.Partner_logo || []).map((logoSrc, index) => ( <div key={index} className="gallery-item"> <img src={logoSrc} alt={`Partner logo ${index + 1}`} className="gallery-image" /> <button type="button" onClick={() => removePortfolioItem('Partner_logo', index)} className="remove-media-button small" > <FiTrash2 /> </button> </div> ))} </div> <div className="add-item-form"> <label className="file-upload-button"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload Partner Logo <input type="file" accept="image/*" onChange={(e) => { if (e.target.files[0]) { const reader = new FileReader(); reader.onloadend = () => { addPortfolioItem('Partner_logo', reader.result); }; reader.readAsDataURL(e.target.files[0]); } }} className="file-input-hidden" /> </label> </div> </div> ); case 'certificationIcons': return ( <div className="content-section"> <h3 className="section-title">Certifications</h3> <div className="list-items-container"> {(pData.certificationIcons || []).map((cert, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <input type="text" value={cert.name} onChange={e => handlePortfolioArrayItemChange('certificationIcons', index, 'name', e.target.value)} placeholder="Certification Name" className="styled-input" /> {cert.icon && ( <img src={cert.icon} alt={cert.name} className="list-item-thumbnail" /> )} </div> <div className="list-item-actions"> <label className="file-upload-button-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> <input type="file" accept="image/*" onChange={(e) => handlePortfolioFileUpload(e.target.files[0], 'certificationIcons', index, 'icon')} className="file-input-hidden" /> </label> <button type="button" onClick={() => removePortfolioItem('certificationIcons', index)} className="remove-item-button" > <FiTrash2 /> </button> </div> </div> ))} </div> <div className="add-item-form"> <h4 className="add-item-title">Add New Certification</h4> <input type="text" placeholder="Certification Name" value={newPortfolioItems.certificationIcon.name} onChange={e => handleNewPortfolioItemChange('certificationIcon', 'name', e.target.value)} className="styled-input" /> <div className="add-item-footer"> <label className="file-upload-button"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload Icon <input type="file" accept="image/*" onChange={(e) => { if (e.target.files[0]) { handleNewPortfolioItemChange('certificationIcon', 'icon', e.target.files[0]); } }} className="file-input-hidden" /> </label> <button type="button" onClick={() => { const fileToProcess = newPortfolioItems.certificationIcon.icon; const newItem = { name: newPortfolioItems.certificationIcon.name, icon: null }; const newIndex = (pData.certificationIcons || []).length; addPortfolioItem('certificationIcons', newItem); if (fileToProcess instanceof File) { const reader = new FileReader(); reader.onloadend = () => { handlePortfolioArrayItemChange('certificationIcons', newIndex, 'icon', reader.result); }; reader.readAsDataURL(fileToProcess); } setNewPortfolioItems(prev => ({ ...prev, certificationIcon: { name: '', icon: null } })); }} className="button-primary" > <FiPlus /> Add Certification </button> </div> </div> </div> ); case 'training': return ( <div className="content-section"> <h3 className="section-title">Training Information</h3> <div className="list-items-container"> {(pData.training || []).map((item, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <textarea placeholder="Training description" value={item.text} onChange={e => handlePortfolioArrayItemChange('training', index, 'text', e.target.value)} rows={3} className="styled-textarea" /> {item.pic && ( <img src={item.pic} alt="Training" className="list-item-thumbnail" /> )} </div> <div className="list-item-actions"> <label className="file-upload-button-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> <input type="file" accept="image/*" onChange={(e) => handlePortfolioFileUpload(e.target.files[0], 'training', index, 'pic')} className="file-input-hidden" /> </label> <button type="button" onClick={() => removePortfolioItem('training', index)} className="remove-item-button" > <FiTrash2 /> </button> </div> </div> ))} </div> <div className="add-item-form"> <h4 className="add-item-title">Add New Training Info</h4> <textarea placeholder="Training description" value={newPortfolioItems.training.text} onChange={e => handleNewPortfolioItemChange('training', 'text', e.target.value)} rows={3} className="styled-textarea" /> <div className="add-item-footer"> <label className="file-upload-button"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Upload Image <input type="file" accept="image/*" onChange={(e) => { if (e.target.files[0]) { handleNewPortfolioItemChange('training', 'pic', e.target.files[0]); } }} className="file-input-hidden" /> </label> <button type="button" onClick={() => { const fileToProcess = newPortfolioItems.training.pic; const newItem = { text: newPortfolioItems.training.text, pic: null }; const newIndex = (pData.training || []).length; addPortfolioItem('training', newItem); if (fileToProcess instanceof File) { const reader = new FileReader(); reader.onloadend = () => { handlePortfolioArrayItemChange('training', newIndex, 'pic', reader.result); }; reader.readAsDataURL(fileToProcess); } setNewPortfolioItems(prev => ({ ...prev, training: { text: '', pic: null } })); }} className="button-primary" > <FiPlus /> Add Training Info </button> </div> </div> </div> ); case 'faqs': return ( <div className="content-section"> <h3 className="section-title">FAQs</h3> <div className="list-items-container"> {(pData.faqs || []).map((faq, index) => ( <div key={faq.id || index} className="list-item-card"> <div className="list-item-content"> <input type="text" placeholder="Question" value={faq.question} onChange={e => handlePortfolioArrayItemChange('faqs', index, 'question', e.target.value)} className="styled-input" /> <textarea placeholder="Answer" value={faq.answer} onChange={e => handlePortfolioArrayItemChange('faqs', index, 'answer', e.target.value)} rows={3} className="styled-textarea" /> </div> <button type="button" onClick={() => removePortfolioItem('faqs', index)} className="remove-item-button" > <FiTrash2 /> </button> </div> ))} </div> <div className="add-item-form"> <h4 className="add-item-title">Add New FAQ</h4> <input type="text" placeholder="Question" value={newPortfolioItems.faq.question} onChange={e => handleNewPortfolioItemChange('faq', 'question', e.target.value)} className="styled-input" /> <textarea placeholder="Answer" value={newPortfolioItems.faq.answer} onChange={e => handleNewPortfolioItemChange('faq', 'answer', e.target.value)} rows={3} className="styled-textarea" /> <button type="button" onClick={() => { if (newPortfolioItems.faq.question && newPortfolioItems.faq.answer) { addPortfolioItem('faqs', { id: Date.now(), question: newPortfolioItems.faq.question, answer: newPortfolioItems.faq.answer }); setNewPortfolioItems(prev => ({ ...prev, faq: { question: '', answer: '' } })); } else { console.log('Please enter both question and answer for FAQ.'); } }} className="button-primary" > <FiPlus /> Add FAQ </button> </div> </div> ); default: return ( <div className="content-section"> <h3 className="section-title">{portfolioContentTabs.find(t => t.id === activePortfolioContentTab)?.label}</h3> <div className="placeholder-content"> <p>Editing area for "{portfolioContentTabs.find(t => t.id === activePortfolioContentTab)?.label}".</p> <p>Build out this section using the same card-based components and styles.</p> </div> </div> ); } }; return renderCurrentTab(); };
//   const renderPaymentSetupContent = () => { const data = contentData.generalSettings.payment; return ( <div className="content-section"> <h3 className="section-title">Payment Setup</h3> <div className="form-field"> <label>Default Currency</label> <select value={data.currency} onChange={e => handleContentNestedChange('generalSettings', 'payment.currency', e.target.value)} className="styled-input rounded-md"> <option value="INR">Indian Rupee (INR)</option> <option value="USD">US Dollar (USD)</option> </select> </div> <h4 className="subsection-title">Payment Gateways</h4> <div className="payment-gateway-card"> <div className="gateway-header"> <img src="https://razorpay.com/assets/razorpay-logo.svg" alt="Razorpay" className="gateway-logo rounded-md" /> <span className={`status-badge ${data.gateways.razorpay.connected ? 'connected' : ''}`}> {data.gateways.razorpay.connected ? 'Connected' : 'Not Connected'} </span> </div> <div className="form-field"> <label>Razorpay Key ID</label> <input type="text" placeholder="rzp_live_..." value={data.gateways.razorpay.keyId} onChange={e => handleContentNestedChange('generalSettings', 'payment.gateways.razorpay.keyId', e.target.value)} className="styled-input rounded-md"/> </div> <div className="form-field"> <label className="inline-flex items-center"> <input type="checkbox" checked={data.gateways.razorpay.connected} onChange={e => handleContentNestedChange('generalSettings', 'payment.gateways.razorpay.connected', e.target.checked)} className="form-checkbox h-5 w-5 text-indigo-600 rounded-sm" /> <span className="ml-2 text-sm text-gray-700">Connect Razorpay</span> </label> </div> </div> <div className="payment-gateway-card"> <div className="gateway-header"> <img src="https://stripe.com/img/v3/home/logos/logo-on-dark.svg" alt="Stripe" className="gateway-logo stripe rounded-md" /> <span className={`status-badge ${data.gateways.stripe.connected ? 'connected' : ''}`}> {data.gateways.stripe.connected ? 'Connected' : 'Not Connected'} </span> </div> <div className="form-field"> <label>Stripe API Key</label> <input type="password" placeholder="sk_live_..." value={data.gateways.stripe.apiKey} onChange={e => handleContentNestedChange('generalSettings', 'payment.gateways.stripe.apiKey', e.target.value)} className="styled-input rounded-md"/> </div> <div className="form-field"> <label className="inline-flex items-center"> <input type="checkbox" checked={data.gateways.stripe.connected} onChange={e => handleContentNestedChange('generalSettings', 'payment.gateways.stripe.connected', e.target.checked)} className="form-checkbox h-5 w-5 text-indigo-600 rounded-sm" /> <span className="ml-2 text-sm text-gray-700">Connect Stripe</span> </label> </div> </div> </div> ); };
//   const renderWhatsAppCommunityContent = () => { const data = contentData.generalSettings.whatsapp; return ( <div className="content-section"> <h3 className="section-title">WhatsApp Community Settings</h3> <div className="form-field"><label htmlFor="whatsappLink_stage">WhatsApp Community Invite Link</label><input type="url" id="whatsappLink_stage" name="whatsappLink" value={data.whatsappLink} onChange={e => handleContentNestedChange('generalSettings', 'whatsapp.whatsappLink', e.target.value)} className="styled-input rounded-md" placeholder="https://chat.whatsapp.com/..." /><p className="field-note">Paste the full invite link to your WhatsApp group.</p></div> <div className="form-field"><label htmlFor="communityDescription_stage">Community Description</label><textarea id="communityDescription_stage" name="communityDescription" value={data.communityDescription} onChange={e => handleContentNestedChange('generalSettings', 'whatsapp.communityDescription', e.target.value)} className="styled-textarea rounded-md" rows={4} placeholder="Describe what members can expect." /></div> </div> ); };
//   const renderMainVideoPageContent = () => { const data = contentData.generalSettings.mainVideo; return ( <div className="content-section"> <h3 className="section-title">Main Video Page Content</h3> <div className="form-field"> <label htmlFor="videoHeadline_stage">Video Headline</label> <input type="text" id="videoHeadline_stage" name="videoHeadline" value={data.videoHeadline || ''} onChange={e => handleContentNestedChange('generalSettings', 'mainVideo.videoHeadline', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label htmlFor="videoUrl_stage">Video Embed URL (e.g., YouTube, Vimeo)</label> <input type="text" id="videoUrl_stage" name="videoUrl" value={data.videoUrl || ''} onChange={e => handleContentNestedChange('generalSettings', 'mainVideo.videoUrl', e.target.value)} className="styled-input rounded-md" placeholder="https://www.youtube.com/embed/your_video_id" /> <p className="field-note">Paste YouTube/Vimeo embed `iframe src` URL here.</p> </div> <div className="form-field"> <label>Upload Your Own Main Video</label> {!data.mainVideoUpload ? ( <label className="file-upload-area rounded-md"> <FiPlus/><span>Click or Drag & Drop to Upload Video</span> <p className="field-note">MP4, WebM, OGG. Max 50MB.</p> <input type="file" id="mainVideoUpload_stage" name="mainVideoUpload" accept="video/*" onChange={e => handleFileUpload('generalSettings', 'mainVideo.mainVideoUpload', e.target.files[0])} className="file-input-hidden" /> </label> ) : ( <div className="video-preview-wrapper rounded-md"> <video controls src={data.mainVideoUpload} className="video-preview rounded-md"> Your browser does not support the video tag. </video> <button type="button" onClick={() => handleFileUpload('generalSettings', 'mainVideo.mainVideoUpload', null)} className="remove-media-button rounded-full" > <FiTrash2/> Remove Video </button> </div> )} </div> </div> ); };
//   const renderAppointmentPageContent = () => { return (<AppointmentCalendar value={contentData.generalSettings.appointment} onChange={(newAppointmentData) => handleContentNestedChange('generalSettings', 'appointment', newAppointmentData)} />); };
//   const renderThankYouPageContent = () => { const data = contentData.generalSettings.thankYou; return ( <div className="content-section"> <h3 className="section-title">Thank You Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'thankYou.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Thank You Message</label> <textarea value={data.thankYouMessage} onChange={e => handleContentNestedChange('generalSettings', 'thankYou.thankYouMessage', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <div className="form-field"> <label>Video URL (Optional Embed)</label> <input type="text" value={data.videoUrl} onChange={e => handleContentNestedChange('generalSettings', 'thankYou.videoUrl', e.target.value)} className="styled-input rounded-md" placeholder="e.g., YouTube iframe src" /> <p className="field-note">Provide an embeddable video URL.</p> </div> <div className="form-field"> <label>Image URL (Optional)</label> <input type="text" value={data.imageUrl} onChange={e => handleContentNestedChange('generalSettings', 'thankYou.imageUrl', e.target.value)} className="styled-input rounded-md" placeholder="https://example.com/thank_you.jpg" /> </div> <div className="form-field"> <label>Social Share Text</label> <input type="text" value={data.socialShareText} onChange={e => handleContentNestedChange('generalSettings', 'thankYou.socialShareText', e.target.value)} className="styled-input rounded-md" placeholder="e.g., I just got an amazing deal!" /> </div> <h4 className="subsection-title">Call to Action</h4> <div className="form-field"> <label>Call to Action Text</label> <input type="text" value={data.callToAction.text} onChange={e => handleContentNestedChange('generalSettings', 'thankYou.callToAction.text', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Call to Action Link</label> <input type="url" value={data.callToAction.link} onChange={e => handleContentNestedChange('generalSettings', 'thankYou.callToAction.link', e.target.value)} className="styled-input rounded-md" /> </div> </div> ); };
//   const renderDownloadPageContent = () => { const data = contentData.generalSettings.download; return ( <div className="content-section"> <h3 className="section-title">Download Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'download.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Introduction Message</label> <textarea value={data.introMessage} onChange={e => handleContentNestedChange('generalSettings', 'download.introMessage', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <h4 className="subsection-title">Downloadable Items</h4> {(data.downloadItems || []).map((item, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <label className="field-label-sm">Item Name</label> <input type="text" value={item.name} onChange={e => handleContentArrayChange('generalSettings', 'download.downloadItems', index, 'name', e.target.value)} className="styled-input rounded-md" /> <label className="field-label-sm">File URL</label> <input type="url" value={item.fileUrl} onChange={e => handleContentArrayChange('generalSettings', 'download.downloadItems', index, 'fileUrl', e.target.value)} className="styled-input rounded-md" placeholder="https://example.com/your_file.pdf" /> </div> <button type="button" onClick={() => removeContentItem('generalSettings', 'download.downloadItems', index)} className="remove-item-button rounded-full"> <FiTrash2/> </button> </div> ))} <button type="button" onClick={() => addContentItem('generalSettings', 'download.downloadItems', { name: '', fileUrl: '' })} className="button-secondary rounded-md"> <FiPlus/> Add Download Item </button> </div> ); };
//   const renderUpsellDownsellPageContent = () => { const data = contentData.generalSettings.upsellDownsell; return ( <div className="content-section"> <h3 className="section-title">Upsell/Downsell Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Headline</label> <input type="text" value={data.headline} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.headline', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Offer Description</label> <textarea value={data.offerDescription} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.offerDescription', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <div className="form-field"> <label>Offer Price</label> <input type="text" value={data.offerPrice} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.offerPrice', e.target.value)} className="styled-input rounded-md" /> </div> <h4 className="subsection-title">Main Call to Action</h4> <div className="form-field"> <label>Call to Action Text</label> <input type="text" value={data.callToAction.text} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.callToAction.text', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Call to Action Link</label> <input type="url" value={data.callToAction.link} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.callToAction.link', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>No Thanks Text</label> <input type="text" value={data.noThanksText} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.noThanksText', e.target.value)} className="styled-input rounded-md" /> </div> <h4 className="subsection-title">Downsell Offer (Optional)</h4> <div className="form-field"> <label className="inline-flex items-center"> <input type="checkbox" checked={data.downsellOffer.active} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.downsellOffer.active', e.target.checked)} className="form-checkbox h-5 w-5 text-indigo-600 rounded-sm" /> <span className="ml-2 text-sm text-gray-700">Enable Downsell Offer</span> </label> </div> {data.downsellOffer.active && ( <> <div className="form-field"> <label>Downsell Headline</label> <input type="text" value={data.downsellOffer.headline} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.downsellOffer.headline', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Downsell Description</label> <textarea value={data.downsellOffer.description} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.downsellOffer.description', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <div className="form-field"> <label>Downsell Price</label> <input type="text" value={data.downsellOffer.price} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.downsellOffer.price', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Downsell CTA Text</label> <input type="text" value={data.downsellOffer.callToAction.text} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.downsellOffer.callToAction.text', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Downsell CTA Link</label> <input type="url" value={data.downsellOffer.callToAction.link} onChange={e => handleContentNestedChange('generalSettings', 'upsellDownsell.downsellOffer.callToAction.link', e.target.value)} className="styled-input rounded-md" /> </div> </> )} </div> ); };
//   const renderWebinarReplayPageContent = () => { const data = contentData.generalSettings.webinarReplay; return ( <div className="content-section"> <h3 className="section-title">Webinar Replay Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'webinarReplay.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Webinar Video Embed URL</label> <textarea value={data.webinarVideoUrl} onChange={e => handleContentNestedChange('generalSettings', 'webinarReplay.webinarVideoUrl', e.target.value)} className="styled-textarea rounded-md" rows={4} placeholder="Paste YouTube/Vimeo iframe code here" /> <p className="field-note">This will embed your webinar replay video.</p> </div> <h4 className="subsection-title">Key Takeaways</h4> {(data.keyTakeaways || []).map((item, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <textarea value={item} onChange={e => handleContentArrayChange('generalSettings', 'webinarReplay.keyTakeaways', index, null, e.target.value)} className="styled-textarea rounded-md" rows={2} /> </div> <button type="button" onClick={() => removeContentItem('generalSettings', 'webinarReplay.keyTakeaways', index)} className="remove-item-button rounded-full"> <FiTrash2/> </button> </div> ))} <button type="button" onClick={() => addContentItem('generalSettings', 'webinarReplay.keyTakeaways', '')} className="button-secondary rounded-md"> <FiPlus/> Add Takeaway </button> <h4 className="subsection-title">Call to Action</h4> <div className="form-field"> <label>Call to Action Text</label> <input type="text" value={data.callToAction.text} onChange={e => handleContentNestedChange('generalSettings', 'webinarReplay.callToAction.text', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Call to Action Link</label> <input type="url" value={data.callToAction.link} onChange={e => handleContentNestedChange('generalSettings', 'webinarReplay.callToAction.link', e.target.value)} className="styled-input rounded-md" /> </div> </div> ); };
//   const renderContactUsPageContent = () => { const data = contentData.generalSettings.contactUs; return ( <div className="content-section"> <h3 className="section-title">Contact Us Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'contactUs.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Introduction Message</label> <textarea value={data.introMessage} onChange={e => handleContentNestedChange('generalSettings', 'contactUs.introMessage', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <div className="form-field"> <label>Email Address</label> <input type="email" value={data.email} onChange={e => handleContentNestedChange('generalSettings', 'contactUs.email', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Phone Number</label> <input type="tel" value={data.phone} onChange={e => handleContentNestedChange('generalSettings', 'contactUs.phone', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Address</label> <textarea value={data.address} onChange={e => handleContentNestedChange('generalSettings', 'contactUs.address', e.target.value)} className="styled-textarea rounded-md" rows={2} /> </div> <div className="form-field"> <label>Map Embed Code (iframe)</label> <textarea value={data.mapEmbedCode} onChange={e => handleContentNestedChange('generalSettings', 'contactUs.mapEmbedCode', e.target.value)} className="styled-textarea rounded-md" rows={5} placeholder="Paste Google Maps iframe embed code here" /> <p className="field-note">This will embed an interactive map.</p> </div> <h4 className="subsection-title">Contact Form Fields (read-only for now)</h4> <p className="field-note">Form fields are predefined. A real implementation would allow customization and submission handling.</p> <ul className="list-disc ml-5 text-sm text-gray-600"> {(data.formFields || []).map((field, index) => ( <li key={index}>{field.label} ({field.type}) {field.required && '(Required)'}</li> ))} </ul> </div> ); };
//   const renderLeadMagnetPageContent = () => { const data = contentData.generalSettings.leadMagnet; return ( <div className="content-section"> <h3 className="section-title">Lead Magnet Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'leadMagnet.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Headline</label> <input type="text" value={data.headline} onChange={e => handleContentNestedChange('generalSettings', 'leadMagnet.headline', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Description</label> <textarea value={data.description} onChange={e => handleContentNestedChange('generalSettings', 'leadMagnet.description', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <div className="form-field"> <label>Offer Image URL</label> <input type="text" value={data.offerImage} onChange={e => handleContentNestedChange('generalSettings', 'leadMagnet.offerImage', e.target.value)} className="styled-input rounded-md" /> </div> <h4 className="subsection-title">Form Fields</h4> {(data.formFields || []).map((field, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <div className="form-grid"> <div> <label className="field-label-sm">Field Label</label> <input type="text" value={field.label} onChange={e => handleContentArrayChange('generalSettings', 'leadMagnet.formFields', index, 'label', e.target.value)} className="styled-input rounded-md" /> </div> <div> <label className="field-label-sm">Field Type</label> <select value={field.type} onChange={e => handleContentArrayChange('generalSettings', 'leadMagnet.formFields', index, 'type', e.target.value)} className="styled-input rounded-md"> <option value="text">Text</option> <option value="email">Email</option> <option value="tel">Phone</option> </select> </div> <div> <label className="inline-flex items-center"> <input type="checkbox" checked={field.required} onChange={e => handleContentArrayChange('generalSettings', 'leadMagnet.formFields', index, 'required', e.target.checked)} className="form-checkbox h-5 w-5 text-indigo-600 rounded-sm" /> <span className="ml-2 text-sm text-gray-700">Required</span> </label> </div> </div> </div> <button type="button" onClick={() => removeContentItem('generalSettings', 'leadMagnet.formFields', index)} className="remove-item-button rounded-full"> <FiTrash2 /> </button> </div> ))} <button type="button" onClick={() => addContentItem('generalSettings', 'leadMagnet.formFields', { label: '', type: 'text', required: true })} className="button-secondary rounded-md"> <FiPlus /> Add Form Field </button> <div className="form-field"> <label>Thank You Message</label> <textarea value={data.thankYouMessage} onChange={e => handleContentNestedChange('generalSettings', 'leadMagnet.thankYouMessage', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <div className="form-field"> <label>Download URL</label> <input type="url" value={data.downloadUrl} onChange={e => handleContentNestedChange('generalSettings', 'leadMagnet.downloadUrl', e.target.value)} className="styled-input rounded-md" /> </div> </div> ); };
//   const renderCallBookingPageContent = () => { const data = contentData.generalSettings.callBooking; return ( <div className="content-section"> <h3 className="section-title">Call Booking Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'callBooking.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Headline</label> <input type="text" value={data.headline} onChange={e => handleContentNestedChange('generalSettings', 'callBooking.headline', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Description</label> <textarea value={data.description} onChange={e => handleContentNestedChange('generalSettings', 'callBooking.description', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> <div className="form-field"> <label>Calendar Embed Code</label> <textarea value={data.calendarEmbedCode} onChange={e => handleContentNestedChange('generalSettings', 'callBooking.calendarEmbedCode', e.target.value)} className="styled-textarea rounded-md" rows={5} placeholder="Paste your calendar embed iframe or script here" /> </div> <div className="form-field"> <label>Availability Text</label> <input type="text" value={data.availabilityText} onChange={e => handleContentNestedChange('generalSettings', 'callBooking.availabilityText', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Confirmation Message</label> <textarea value={data.confirmationMessage} onChange={e => handleContentNestedChange('generalSettings', 'callBooking.confirmationMessage', e.target.value)} className="styled-textarea rounded-md" rows={3} /> </div> </div> ); };
//   const renderVSLPageContent = () => { const data = contentData.generalSettings.vslPage; return ( <div className="content-section"> <h3 className="section-title">Video Sales Letter (VSL) Page Settings</h3> <div className="form-field"> <label>Page Title</label> <input type="text" value={data.pageTitle} onChange={e => handleContentNestedChange('generalSettings', 'vslPage.pageTitle', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Headline</label> <input type="text" value={data.headline} onChange={e => handleContentNestedChange('generalSettings', 'vslPage.headline', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>Video URL</label> <input type="text" value={data.videoUrl} onChange={e => handleContentNestedChange('generalSettings', 'vslPage.videoUrl', e.target.value)} className="styled-input rounded-md" placeholder="YouTube/Vimeo embed URL" /> </div> <div className="form-field"> <label>Upload Your Own VSL Video</label> {!data.mainVideoUpload ? ( <label className="file-upload-area rounded-md"> <FiPlus/> <span>Click or Drag & Drop to Upload Video</span> <p className="field-note">MP4, WebM, OGG. Max 50MB.</p> <input type="file" accept="video/*" onChange={e => handleFileUpload('generalSettings', 'vslPage.mainVideoUpload', e.target.files[0])} className="file-input-hidden" /> </label> ) : ( <div className="video-preview-wrapper rounded-md"> <video controls src={data.mainVideoUpload} className="video-preview rounded-md"> Your browser does not support the video tag. </video> <button type="button" onClick={() => handleFileUpload('generalSettings', 'vslPage.mainVideoUpload', null)} className="remove-media-button rounded-full" > <FiTrash2 /> Remove Video </button> </div> )} </div> <h4 className="subsection-title">Key Points</h4> {(data.keyPoints || []).map((point, index) => ( <div key={index} className="list-item-card"> <div className="list-item-content"> <textarea value={point} onChange={e => handleContentArrayChange('generalSettings', 'vslPage.keyPoints', index, null, e.target.value)} className="styled-textarea rounded-md" rows={2} /> </div> <button type="button" onClick={() => removeContentItem('generalSettings', 'vslPage.keyPoints', index)} className="remove-item-button rounded-full"> <FiTrash2 /> </button> </div> ))} <button type="button" onClick={() => addContentItem('generalSettings', 'vslPage.keyPoints', '')} className="button-secondary rounded-md"> <FiPlus /> Add Key Point </button> <h4 className="subsection-title">Call to Action</h4> <div className="form-field"> <label>CTA Text</label> <input type="text" value={data.callToAction.text} onChange={e => handleContentNestedChange('generalSettings', 'vslPage.callToAction.text', e.target.value)} className="styled-input rounded-md" /> </div> <div className="form-field"> <label>CTA Link</label> <input type="url" value={data.callToAction.link} onChange={e => handleContentNestedChange('generalSettings', 'vslPage.callToAction.link', e.target.value)} className="styled-input rounded-md" /> </div> </div> ); };


//   // Main content area rendering based on active stage
//   const renderContentArea = () => {
//     if (isLoading) return <div className="main-content-placeholder"><div className="spinner"></div> Loading content...</div>;
//     if (!activeStage) return <div className="main-content-placeholder">Please select a stage from the left or add new stages.</div>;

//     const renderHeader = () => ( <div className="content-area-header"> <div className="header-inner-padding"><h2 className="content-title">{activeStage.name}</h2></div> {(activeStage.type === 'sales-editor' || activeStage.type === 'portfolio-editor') && ( <div className="content-tabs"> {(activeStage.type === 'sales-editor' ? funnelContentTabs : portfolioContentTabs).map(tab => ( <button key={tab.id} className={`tab-button rounded-t-md ${ (activeStage.type === 'sales-editor' && activeFunnelContentTab === tab.id) || (activeStage.type === 'portfolio-editor' && activePortfolioContentTab === tab.id) ? 'active' : ''}`} onClick={() => { if (activeStage.type === 'sales-editor') { setActiveFunnelContentTab(tab.id); } else { setActivePortfolioContentTab(tab.id); } setContentKey(k => k + 1); }} > {tab.icon} <span>{tab.label}</span> </button> ))} </div> )} </div> );
//     const renderBody = () => {
//       switch (activeStage.type) {
//         case 'theme': return renderThemeSelectorContent();
//         case 'sales-editor': return renderSalesPageContent();
//         case 'portfolio-editor': return renderPortfolioEditorContent();
//         case 'payment-page': return renderPaymentSetupContent();
//         case 'whatsapp-page': return renderWhatsAppCommunityContent();
//         case 'video-page': return renderMainVideoPageContent();
//         case 'appointment-page': return renderAppointmentPageContent();
//         case 'thank-you-page': return renderThankYouPageContent();
//         case 'download-page': return renderDownloadPageContent();
//         case 'upsell-downsell-page': return renderUpsellDownsellPageContent();
//         case 'webinar-replay-page': return renderWebinarReplayPageContent();
//         case 'contact-us-page': return renderContactUsPageContent();
//         case 'lead-magnet-page': return renderLeadMagnetPageContent();
//         case 'call-booking-page': return renderCallBookingPageContent();
//         case 'vsl-page': return renderVSLPageContent();
//         default: return <div className="placeholder-content">Settings for {activeStage.name}.</div>;
//       }
//     };

//     return ( <> {renderHeader()} <div className="content-body" key={contentKey}> <div className="animated-content"> {renderBody()} <div className="content-actions"> {saveStatus && <span className="save-status">{saveStatus}</span>} <button type="button" className="button-primary rounded-md" onClick={() => saveFunnelData({ content: contentData, stages })} disabled={isLoading}> <FiSave/> Save Changes </button> </div> </div> </div> </> );
//   };

//   // --- Add New Stage Modal Logic ---
//   const handleAddStage = (selectedStageIds) => {
//     const newStagesToAdd = ALL_AVAILABLE_STAGES
//       .filter(s => selectedStageIds.includes(s.id) && !stages.some(existing => existing.id === s.id))
//       .map(s => ({ ...s, fixed: false }));
//     setStages(prevStages => [...prevStages, ...newStagesToAdd]);
//     setShowAddStageModal(false);
//   };

//   const AddStageModal = ({ onClose, onAdd }) => { const [selectedNewStages, setSelectedNewStages] = useState([]); const toggleStageSelection = (stageId) => { setSelectedNewStages(prev => prev.includes(stageId) ? prev.filter(id => id !== stageId) : [...prev, stageId] ); }; const availableStagesForSelection = ALL_AVAILABLE_STAGES.filter(s => !stages.some(existing => existing.id === s.id) && s.id !== 'theme-selector' && s.id !== 'portfolio-content' && s.id !== 'sales-page-content'); return ( <div className="modal-overlay"> <div className="modal-content rounded-lg"> <div className="modal-header"> <h3>Add New Stage</h3> <button className="modal-close-button" onClick={onClose}><FiX/></button> </div> <div className="modal-body"> {availableStagesForSelection.length === 0 ? ( <p>All available stages have been added.</p> ) : ( <div className="available-stages-grid"> {availableStagesForSelection.map(stage => ( <button key={stage.id} className={`stage-select-card rounded-md ${selectedNewStages.includes(stage.id) ? 'selected' : ''}`} onClick={() => toggleStageSelection(stage.id)} > {stage.name} </button> ))} </div> )} </div> <div className="modal-footer"> <button className="button-secondary rounded-md" onClick={onClose}>Cancel</button> <button className="button-primary rounded-md" onClick={() => onAdd(selectedNewStages)} disabled={selectedNewStages.length === 0}> <FiPlus/> Add Selected Stages </button> </div> </div> </div> ); };
//   const removeStage = (stageId) => {
//     setStages(prevStages => prevStages.filter(stage => stage.id !== stageId));
//     if (activeStageId === stageId) {
//         setActiveStageId('theme-selector');
//     }
//     setContentKey(k => k + 1);
//   };


//   return (
//     <div className="editor-container">
//       <header className="editor-header">
//         <div> <h1>Funnel Content Editor</h1> <p>Editing: {activeStage?.name}</p> {userId && <p className="user-id-display">Funnel ID: {userId}</p>} </div>
//         <div className="header-actions">
//           <button className="button-secondary rounded-md" disabled={isLoading}><FiExternalLink/> Preview</button>
//           <button className="button-primary rounded-md" onClick={() => saveFunnelData({ content: contentData, stages })} disabled={isLoading}> <FiSave/> Publish Funnel </button>
//         </div>
//       </header>
//       <div className="editor-layout">
//         <aside className="editor-sidebar">
//           <h3 className="sidebar-title">Funnel Stages</h3>
//           <ul className="stages-list">
//             {stages.map(stage => (
//               <li key={stage.id} className={`stage-item rounded-md ${activeStageId === stage.id ? 'active' : ''}`} onClick={() => { setActiveStageId(stage.id); setContentKey(k => k + 1); }} >
//                 <span className="stage-name">{stage.name}</span>
//                 {!stage.fixed && ( <button type="button" className="remove-stage-button rounded-full" onClick={(e) => { e.stopPropagation(); removeStage(stage.id); }}> <FiTrash2/> </button> )}
//                 <FiChevronRight/>
//               </li>
//             ))}
//             <button type="button" className="button-primary-full rounded-md" onClick={() => setShowAddStageModal(true)} disabled={isLoading}> <FiPlus/> Add New Stage </button>
//           </ul>
//         </aside>
//         <main className="editor-main-content">
//           {renderContentArea()}
//         </main>
//       </div>
//       {showAddStageModal && <AddStageModal onClose={() => setShowAddStageModal(false)} onAdd={handleAddStage} />}
//               <style jsx>{`
//                 .content-section {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           color: #333;
//         }

//         .section-title {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 1.5rem;
//           color: #2d3748;
//         }

//         .subsection-title {
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin: 1.5rem 0 0.5rem;
//           color: #2d3748;
//         }

//         .section-description {
//           color: #718096;
//           font-size: 0.9rem;
//           margin-bottom: 1rem;
//         }

//         .form-field {
//           margin-bottom: 1.5rem;
//         }

//         label {
//           display: block;
//           font-weight: 500;
//           margin-bottom: 0.5rem;
//           color: #4a5568;
//           font-size: 0.9rem;
//         }

//         .styled-input {
//           width: 100%;
//           padding: 0.75rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           background-color: #fff;
//           transition: all 0.2s ease;
//           font-size: 0.9rem;
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//         }

//         .styled-input:focus {
//           outline: none;
//           border-color: #4299e1;
//           box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
//         }

//         .input-with-icon-right {
//           position: relative;
//         }

//         .input-icon {
//           position: absolute;
//           right: 0.75rem;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #a0aec0;
//           pointer-events: none;
//         }

//         .calendar-container {
//           margin-top: 1.5rem;
//         }

//         .styled-datepicker {
//           width: 100%;
//           border-radius: 0.75rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           padding: 1.25rem;
//           background: white;
//           border: 1px solid #e2e8f0;
//         }

//         .styled-calendar {
//           border: none;
//           font-family: inherit;
//           width: 100%;
//         }

//         .calendar-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 1rem;
//           padding: 0 0.5rem;
//         }

//         .calendar-month-year {
//           display: flex;
//           gap: 0.75rem;
//         }

//         .calendar-nav-button {
//           background: none;
//           border: none;
//           font-size: 1rem;
//           cursor: pointer;
//           color: #4a5568;
//           padding: 0.5rem;
//           border-radius: 0.5rem;
//           transition: all 0.2s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 2rem;
//           height: 2rem;
//           background-color: #f7fafc;
//         }

//         .calendar-nav-button:hover {
//           background-color: #edf2f7;
//           color: #2d3748;
//         }

//         .calendar-nav-button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .calendar-select {
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           padding: 0.375rem 0.75rem;
//           font-size: 0.875rem;
//           background-color: white;
//           color: #4a5568;
//           cursor: pointer;
//           font-weight: 500;
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//         }

//         .calendar-select:focus {
//           outline: none;
//           border-color: #4299e1;
//         }

//         .react-datepicker__month-container {
//           width: 100%;
//         }

//         .react-datepicker__header {
//           background-color: white;
//           border-bottom: 1px solid #e2e8f0;
//           padding-top: 0;
//         }

//         .react-datepicker__day-names {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 1rem;
//           padding: 0 0.5rem;
//         }

//         .react-datepicker__day-name {
//           color: #718096;
//           font-weight: 500;
//           font-size: 0.8rem;
//           width: 2.25rem;
//           line-height: 2.25rem;
//         }

//         .react-datepicker__week {
//           display: flex;
//           justify-content: space-between;
//           padding: 0.25rem 0.5rem;
//         }

//         .calendar-day {
//           padding: 0.375rem;
//           border-radius: 50%;
//           text-align: center;
//           cursor: pointer;
//           width: 2.25rem;
//           height: 2.25rem;
//           line-height: 1.5rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0.125rem;
//           font-size: 0.875rem;
//           transition: all 0.2s ease;
//           border: 2px solid transparent;
//         }

//         .calendar-day:hover {
//           background-color: #edf2f7;
//         }

//         .calendar-day.available {
//           background-color: #ebf8ff;
//           color: #;
//           font-weight: 500;
//         }

//         .calendar-day.blocked {
//           background-color: #fed7d7;
//           color: #e53e3e;
//           text-decoration: line-through;
//           opacity: 0.7;
//         }

//         .react-datepicker__day--selected,
//         .react-datepicker__day--in-selecting-range,
//         .react-datepicker__day--in-range {
//           background-color: #;
//           color: white;
//           font-weight: 600;
//         }

//         .react-datepicker__day--disabled {
//           color: #cbd5e0;
//           cursor: not-allowed;
//         }

//         .react-datepicker__day--outside-month {
//           color: #cbd5e0;
//         }

//         .date-range-info {
//           background-color: #f7fafc;
//           padding: 1.25rem;
//           border-radius: 0.75rem;
//           margin: 1.5rem 0;
//           border: 1px solid #e2e8f0;
//           box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
//         }

//         .info-item {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 0.75rem;
//           font-size: 0.9rem;
//         }

//         .info-label {
//           font-weight: 500;
//           color: #718096;
//         }

//         .info-value {
//           font-weight: 600;
//           color: #2d3748;
//         }

//         .days-grid {
//           display: grid;
//           grid-template-columns: repeat(7, 1fr);
//           gap: 0.5rem;
//           margin-top: 0.5rem;
//         }

//         .day-pill {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0.5rem;
//           border-radius: 0.5rem;
//           background-color: #f7fafc;
//           color: #718096;
//           cursor: pointer;
//           font-size: 0.875rem;
//           transition: all 0.2s ease;
//           border: 1px solid #e2e8f0;
//         }

//         .day-pill.active {
//           background-color: #ebf8ff;
//           color: #;
//           font-weight: 600;
//           border-color: #bee3f8;
//           box-shadow: 0 1px 2px 0 rgba(66, 153, 225, 0.2);
//         }

//         .blocked-dates-list {
//           margin-top: 1rem;
//         }

//         .blocked-dates-list ul {
//           padding: 0;
//           margin: 0;
//           list-style: none;
//         }

//         .blocked-date-item {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0.75rem 1rem;
//           background-color: #fff5f5;
//           border-radius: 0.5rem;
//           margin-bottom: 0.5rem;
//           border: 1px solid #fed7d7;
//           font-size: 0.875rem;
//         }

//         .remove-item-button {
//           background: none;
//           border: none;
//           color: #e53e3e;
//           cursor: pointer;
//           padding: 0.25rem;
//           border-radius: 0.25rem;
//           transition: all 0.2s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .remove-item-button:hover {
//           background-color: #fed7d7;
//         }

//         .validation-error {
//           color: #e53e3e;
//           background-color: #fff5f5;
//           padding: 0.75rem 1rem;
//           border-radius: 0.5rem;
//           margin-bottom: 1rem;
//           font-size: 0.875rem;
//           border: 1px solid #fed7d7;
//         }

//         .form-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1rem;
//           margin-bottom: 1.5rem;
//         }

//         .custom-select-wrapper {
//           position: relative;
//         }

//         .styled-select {
//           width: 100%;
//           padding: 0.75rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           background-color: #fff;
//           appearance: none;
//           font-size: 0.9rem;
//           color: #4a5568;
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//         }

//         .select-icon {
//           position: absolute;
//           right: 0.75rem;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #a0aec0;
//           pointer-events: none;
//         }

//         .content-actions {
//           display: flex;
//           justify-content: flex-end;
//           gap: 1rem;
//           margin-top: 2rem;
//         }

//         .button-primary {
//           background-color: #;
//           color: white;
//           border: none;
//           padding: 0.75rem 1.5rem;
//           border-radius: 0.5rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
//         }

//         .button-primary:hover {
//           background-color: #2b6cb0;
//         }

//         .button-secondary {
//           background-color: white;
//           color: #;
//           border: 1px solid #;
//           padding: 0.75rem 1.5rem;
//           border-radius: 0.5rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
//         }

//         .button-secondary:hover {
//           background-color: #ebf8ff;
//         }

//         .field-note {
//           color: #a0aec0;
//           font-size: 0.8rem;
//           margin-top: 0.5rem;
//         }

//         @media (max-width: 768px) {
//           .form-grid {
//             grid-template-columns: 1fr;
//           }

//           .days-grid {
//             grid-template-columns: repeat(4, 1fr);
//           }

//           .content-actions {
//             flex-direction: column;
//           }

//           .button-primary, .button-secondary {
//             width: 100%;
//           }
//         }
//   /* Design System & CSS Variables */
//         :root {
//           --color-primary: #4f46e5;
//           --color-primary-hover: #4338ca;
//           --color-primary-light: #e0e7ff;
//           --color-secondary: #10b981;
//           --color-danger: #ef4444;
//           --color-danger-hover: #dc2626;
//           --text-primary: #111827;
//           --text-secondary: #4b5563;
//           --text-light: #6b7280;
//           --bg-main: #f9fafb;
//           --bg-content: #ffffff;
//           --border-color: #e5e7eb;
//           --border-focus: #a5b4fc;
//           --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//           --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//           --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
//           --radius-sm: 0.25rem;
//           --radius-md: 0.5rem;
//           --radius-lg: 0.75rem;
//           --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* Keyframe Animations */
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(15px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes spinner {
//           to {transform: rotate(360deg);}
//         }

//         /* Spinner Style */
//         .spinner {
//           display: inline-block;
//           width: 20px;
//           height: 20px;
//           border: 2px solid var(--border-color);
//           border-radius: 50%;
//           border-top-color: var(--color-primary);
//           animation: spinner .8s ease infinite;
//           margin-right: 0.5rem;
//         }

//         /* Base & Layout Styles */
//         .editor-container {
//           display: flex;
//           flex-direction: column;
//           height: 100vh;
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           background-color: var(--bg-main);
//           color: var(--text-primary);
//         }
//         .editor-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//           border-bottom: 1px solid var(--border-color);
//           background-color: var(--bg-content);
//           box-shadow: var(--shadow);
//           flex-shrink: 0;
//         }
//         .editor-header h1 { font-size: 1.25rem; font-weight: 600; margin: 0; }
//         .editor-header p { font-size: 0.875rem; color: var(--text-secondary); margin: 0.25rem 0 0; }
//         .user-id-display { font-size: 0.75rem; color: var(--text-light); margin-top: 0.5rem; }
//         .header-actions { display: flex; gap: 0.75rem; }
//         .save-status {
//             font-size: 0.875rem;
//             color: var(--text-secondary);
//             margin-right: 1rem;
//             display: flex;
//             align-items: center;
//         }
//         .editor-layout { display: flex; flex-grow: 1; overflow: hidden; }

//         /* Sidebar Styles */
//         .editor-sidebar {
//           width: 280px;
//           background-color: var(--bg-content);
//           padding: 1.5rem 1rem;
//           border-right: 1px solid var(--border-color);
//           display: flex;
//           flex-direction: column;
//           transition: var(--transition);
//         }
//         .sidebar-title {
//           font-size: 0.75rem;
//           font-weight: 600;
//           color: var(--text-light);
//           margin: 0 0 1rem 0.5rem;
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//         }
//         .stages-list { list-style: none; padding: 0; margin: 0; flex-grow: 1; }
//         .stage-item {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0.75rem 1rem;
//           margin-bottom: 0.25rem;
//           border-radius: var(--radius-md);
//           cursor: pointer;
//           font-size: 0.9375rem;
//           font-weight: 500;
//           color: var(--text-secondary);
//           transition: var(--transition);
//         }
//         .stage-item:hover { background-color: var(--bg-main); color: var(--text-primary); }
//         .stage-item.active { background-color: var(--color-primary-light); color: var(--color-primary); font-weight: 600; }
//         .stage-item.active .stage-arrow { color: var(--color-primary); }
//         .stage-arrow { font-size: 1.125rem; color: #9ca3af; transition: var(--transition); }
//         .remove-stage-button {
//             background: none;
//             border: none;
//             color: var(--text-light);
//             cursor: pointer;
//             padding: 0.25rem;
//             margin-left: 0.5rem;
//             transition: var(--transition);
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
//         .remove-stage-button:hover {
//             color: var(--color-danger);
//             background-color: #fee2e2;
//         }


//         /* Main Content Area */
//         .editor-main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
//         .content-area-header {
//           background-color: var(--bg-content);
//           padding-top: 1.5rem;
//           border-bottom: 1px solid var(--border-color);
//           flex-shrink: 0;
//         }
//         .header-inner-padding { padding: 0 2rem; }
//         .content-title { font-size: 1.75rem!important; font-weight: 700; margin: 0 0 1.5rem 0!important; }
//         .content-tabs {
//           display: flex;
//           gap: 0.5rem;
//           color:black!important;
//           padding: 0 2rem;
//           border-bottom: 1px solid var(--border-color);
//           overflow-x: auto; /* Enable horizontal scrolling for tabs if they overflow */
//           -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
//         }
//           .funnel-type-card.active{
//           box-shadow: 0 0 0 3px var(--primary-color);
//     transform: scale(1.05);
//           }
//         .tab-button {
//           flex-shrink: 0; /* Prevent tabs from shrinking */
//           padding: 0.75rem 1rem;
//           border: none;
//           border-bottom: 3px solid transparent;
//           background-color: transparent;
//           color: var(--text-secondary);
//           font-size: 0.875rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: var(--transition);
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           margin-bottom: -1px;
//         }
//         .tab-button:hover { color: var(--color-primary); }
//         .tab-button.active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
//         .content-body { flex-grow: 1; overflow-y: auto; padding: 2rem; }
//         .animated-content {
//             animation: slideInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//             max-width: 900px;
//             margin: 0 auto;
//         }
//         .content-section {
//             background: var(--bg-content);
//             padding: 16px;
//             border-radius: var(--radius-lg);
//             box-shadow: var(--shadow);
//             margin-bottom: 2rem;
//         }
//         .section-title {
//             font-size: 1.25rem;
//             font-weight: 600;
//             margin: 0 0 0.5rem;
//             color:#7c3aed!important;
//             padding-bottom: 1rem;
//             border-bottom: 1px solid var(--border-color);
//         }
//         .subsection-title {
//             font-size: 1rem;
//             font-weight: 600;
//             margin: 1.5rem 0 0.5rem;
//             color: var(--text-secondary);
//         }
//         .section-description { font-size: 0.9rem; color: var(--text-secondary); margin: -0.5rem 0 1.5rem; }
//         .content-actions {
//             display: flex;
//             justify-content: flex-end;
//             align-items: center;
//             padding-top: 1.5rem;
//             margin-top: 1rem;
//             border-top: 1px solid var(--border-color);
//         }

//         /* General & Form Styles */
//         .form-field { margin-bottom: 1.5rem; }
//         .form-field > label {
//           font-size: 0.875rem;
//           font-weight: 500;
//           color: var(--text-primary);
//           margin-bottom: 0.5rem;
//           display: block;
//         }
//         .styled-input, .styled-textarea {
//           width: 100%;
//           padding: 0.75rem 1rem;
//           border: 1px solid #e2e8f0!important;
//           border-radius: var(--radius-md);
//           font-size: 0.9375rem;
//           color: var(--text-primary);
//           background-color: var(--bg-content);
//           transition: var(--transition);
//           box-shadow: var(--shadow-sm);
//         }
//         .styled-input:focus, .styled-textarea:focus {
//           outline: none;
//           border-color: var(--border-focus);
//           box-shadow: 0 0 0 3px var(--color-primary-light);
//         }
//         .styled-textarea { min-height: 120px; resize: vertical; }
//         .field-note { font-size: 0.8rem; color: var(--text-light); margin-top: 0.5rem; }
//         .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
//         .form-field.full-width { grid-column: 1 / -1; }

//         /* Buttons */
//         .button-primary, .button-secondary, .button-primary-full {
//             display: inline-flex;
//             align-items: center;
//             justify-content: center;
//             gap: 0.5rem;
//             padding: 0.625rem 1.25rem;
//             border: 1px solid transparent;
//             border-radius: var(--radius-md);
//             font-size: 0.875rem;
//             font-weight: 600;
//             cursor: pointer;
//             transition: var(--transition);
//             box-shadow: var(--shadow);
//         }
//         .button-primary, .button-primary-full { background-color: var(--color-primary); color: white; }
//         .button-primary:hover, .button-primary-full:hover { background-color: var(--color-primary-hover); box-shadow: var(--shadow-lg); }
//         .button-primary-full { width: 100%; margin-top: 4rem; }
//         .button-secondary { background-color: var(--bg-content); color: var(--text-secondary); border-color: var(--border-color); }
//         .button-secondary:hover { border-color: var(--text-secondary); color: var(--text-primary); }
//         .file-upload-button {
//             display: inline-flex;
//             align-items: center;
//             gap: 0.5rem;
//             padding: 0.5rem 1rem;
//             border: 1px solid var(--border-color);
//             border-radius: var(--radius-md);
//             background-color: var(--bg-content);
//             color: var(--text-secondary);
//             font-size: 0.875rem;
//             font-weight: 500;
//             cursor: pointer;
//             transition: var(--transition);
//         }
//         .file-upload-button:hover { border-color: var(--text-secondary); color: var(--text-primary); }

//         /* File Upload & Media Styles */
//         .file-input-hidden { display: none; }
//         .file-upload-area {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             padding: 2rem;
//             border: 2px dashed var(--border-color);

//             background-color: var(--bg-main);
//             cursor: pointer;
//             text-align: center;
//             transition: var(--transition);
//         }
//         .file-upload-area:hover { border-color: var(--color-primary); background-color: var(--color-primary-light); }
//         .upload-icon-large { font-size: 2.5rem; color: var(--color-primary); margin-bottom: 0.75rem; }
//         .file-upload-area span { font-weight: 500; }
//         .profile-images-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
//         .profile-image-uploader {
//             position: relative;
//             border-radius: var(--radius-lg);
//             overflow: hidden;
//             background-color: var(--bg-main);
//             aspect-ratio: 4/5;
//             box-shadow: var(--shadow);
//         }
//         .file-upload-label { display: block; width: 100%; height: 100%; cursor: pointer; }
//         .profile-image-preview { width: 100%; height: 100%; object-fit: cover; }
//         .upload-placeholder {
//             width: 100%;
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: center;
//             color: var(--text-light);
//             transition: var(--transition);
//         }
//         .upload-placeholder:hover { color: var(--color-primary); background-color: #eef2ff; }
//         .upload-placeholder svg { font-size: 1.5rem; margin-bottom: 0.5rem; }
//         .remove-media-button {
//             position: absolute;
//             top: 0.75rem; right: 0.75rem;
//             background-color: rgba(239, 68, 68, 0.8);
//             color: white;
//             border: none;
//             width: 32px; height: 32px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             transition: var(--transition);
//             backdrop-filter: blur(4px);
//         }
//         .remove-media-button.small {
//           width: 24px;
//           height: 24px;
//           font-size: 0.75rem;
//         }
//         .remove-media-button:hover { background-color: var(--color-danger); transform: scale(1.1); }
//         .video-preview-wrapper { position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--radius-md); }
//         .video-preview { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; }

//         /* List Item Editor (for Testimonials, FAQs, etc.) */
//         .list-items-container { display: flex; flex-direction: column; gap: 1rem; }
//         .list-item-card {
//             display: flex;
//             gap: 1rem;
//             margin-bottom: 10px;
//             padding: 1rem;
//             border: 1px solid var(--border-color);
//             border-radius: var(--radius-md);
//             background-color: var(--bg-main);
//             transition: var(--transition);
//             animation: fadeIn 0.3s ease;
//         }
//         .list-item-card:hover { border-color: var(--border-focus); }
//         .list-item-content {
//           flex-grow: 1;
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }
//         .list-item-actions {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 0.5rem;
//           min-width: 80px;
//         }
//         .list-item-thumbnail {
//           width: 60px;
//           height: 60px;
//           object-fit: cover;
//           border-radius: var(--radius-md);
//         }
//         .file-upload-button-sm {
//             background: var(--bg-content);
//             border: 1px solid var(--border-color);
//             width: 32px;
//             height: 32px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             color: var(--text-light);
//             transition: var(--transition);
//         }
//         .file-upload-button-sm:hover {
//           color: var(--color-primary);
//           border-color: var(--color-primary);
//         }
//         .remove-item-button {
//             background: none;
//             border: none;
//             color: var(--color-danger);
//             cursor: pointer;
//             padding: 0.5rem;
//             transition: var(--transition);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: var(--radius-sm);
//         }
//         .remove-item-button:hover {
//           background-color: #fee2e2;
//           color: var(--color-danger-hover);
//         }
//         .add-item-form {
//             margin-top: 2rem;
//             padding-top: 1.5rem;
//             border-top: 1px solid var(--border-color);
//             display: flex;
//             flex-direction: column;
//             gap: 1rem;
//         }
//         .add-item-title {
//           font-size: 1rem;
//           font-weight: 600;
//           margin: 0 0 0.5rem;
//           color: var(--text-secondary);
//         }
//         .add-item-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 1rem;
//         }

//         /* Gallery Styles */
//         .gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
//           gap: 1rem;
//         }
//         .gallery-item {
//           position: relative;
//           border-radius: var(--radius-md);
//           overflow: hidden;
//           aspect-ratio: 1;
//         }
//         .gallery-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         /* Theme Selector Specific Styles */
//         .theme-selection-container {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 1rem;
//         }
//         .theme-card {
//             position: relative;
//             border-radius: var(--radius-lg);
//             overflow: hidden;
//             cursor: pointer;
//             transition: var(--transition);
//             border: 3px solid transparent;
//             box-shadow: var(--shadow);
//         }
//         .theme-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
//         .theme-card.active { border-color: var(--color-primary); }
//         .theme-image { display: block; width: 100%; height: 180px; object-fit: cover; }
//         .theme-name-overlay {
//             position: absolute;
//             bottom: 0; left: 0; right: 0;
//             background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
//             padding: 1.5rem 1rem 0.75rem;
//             color: white;
//             font-weight: 600;
//         }
//         .mode-selection-container { display: flex; gap: 1rem; }
//         .mode-button {
//             flex: 1;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             gap: 0.75rem;
//             padding: 1rem;
//             border: 2px solid var(--border-color);
//             border-radius: var(--radius-md);
//             background: var(--bg-content);
//             font-size: 1rem;
//             font-weight: 600;
//             cursor: pointer;
//             transition: var(--transition);
//         }
//         .mode-button:hover { border-color: var(--border-focus); }
//         .mode-button.active {
//             border-color: var(--color-primary);
//             color: var(--color-primary);
//             background-color: var(--color-primary-light);
//             box-shadow: var(--shadow);
//         }

//         /* Payment Gateway Card */
//         .payment-gateway-card { border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.5rem; background-color: #fff; box-shadow: var(--shadow-sm); }
//         .gateway-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
//         .gateway-logo { height: 28px; }
//         .gateway-logo.stripe { filter: invert(1); background-color: #0A2540; padding: 4px 8px; border-radius: var(--radius-sm); }
//         .status-badge { font-size: 0.8rem; font-weight: 600; padding: 0.25rem 0.75rem; border-radius: 999px; background-color: #fee2e2; color: #b91c1c; }
//         .status-badge.connected { background-color: #dcfce7; color: #166534; }

//         /* Placeholder Content */
//         .placeholder-content, .main-content-placeholder { text-align: center; padding: 3rem; border: 2px dashed var(--border-color); border-radius: var(--radius-lg); color: var(--text-light); background-color: #fdfdff; }
//         .main-content-placeholder { display: flex; align-items: center; justify-content: center; height: 100%; }

//         /* Modal Styles */
//         .modal-overlay {
//             position: fixed;
//             top: 0; left: 0; right: 0; bottom: 0;
//             background-color: rgba(0, 0, 0, 0.6);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 1000;
//             animation: fadeIn 0.3s ease;
//         }
//         .modal-content {
//             background-color: var(--bg-content);
//             border-radius: var(--radius-lg);
//             box-shadow: var(--shadow-lg);
//             width: 90%;
//             max-width: 600px;
//             max-height: 80vh;
//             display: flex;
//             flex-direction: column;
//             animation: slideInUp 0.3s ease;
//         }
//         .modal-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 1.5rem 2rem;
//             border-bottom: 1px solid var(--border-color);
//         }
//         .modal-header h3 { font-size: 1.25rem; font-weight: 600; margin: 0; }
//         .modal-close-button {
//             background: none;
//             border: none;
//             font-size: 1.5rem;
//             color: var(--text-light);
//             cursor: pointer;
//             transition: var(--transition);
//         }
//         .modal-close-button:hover { color: var(--color-danger); }
//         .modal-body {
//             padding: 2rem;
//             overflow-y: auto;
//             flex-grow: 1;
//         }
//         .modal-footer {
//             display: flex;
//             justify-content: flex-end;
//             gap: 0.75rem;
//             padding: 1.5rem 2rem;
//             border-top: 1px solid var(--border-color);
//         }
//         .available-stages-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//             gap: 1rem;
//         }
//         .stage-select-card {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             padding: 1.5rem 1rem;
//             border: 2px solid var(--border-color);
//             border-radius: var(--radius-md);
//             background-color: var(--bg-main);
//             font-weight: 500;
//             cursor: pointer;
//             transition: var(--transition);
//             text-align: center;
//         }
//         .stage-select-card:hover { border-color: var(--border-focus); background-color: #eef2ff; }
//         .stage-select-card.selected {
//             border-color: var(--color-primary);
//             background-color: var(--color-primary-light);
//             color: var(--color-primary);
//             box-shadow: var(--shadow);
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .editor-layout {
//             flex-direction: column;
//           }
//           .editor-sidebar {
//             width: 100%;
//             border-right: none;
//             border-bottom: 1px solid var(--border-color);
//           }
//           .form-grid {
//             grid-template-columns: 1fr;
//           }
//           .profile-images-grid {
//             grid-template-columns: 1fr;
//           }
//           .theme-selection-container {
//             grid-template-columns: 1fr;
//           }
//           .content-tabs {
//             padding: 0 1rem; /* Adjust padding for smaller screens */
//           }
//           .header-inner-padding {
//             padding: 0 1rem; /* Adjust padding for smaller screens */
//           }
//           .content-body {
//             padding: 1rem; /* Adjust padding for smaller screens */
//           }
//           .modal-content {
//             width: 95%; /* Adjust modal width for smaller screens */
//           }
//           .modal-header, .modal-footer {
//             padding: 1rem; /* Adjust modal padding */
//           }
//         }
//             .content-section {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           color: #333;
//         }
        
//         .section-title {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 1.5rem;
//           color: #2d3748;
//         }
        
//         .subsection-title {
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin: 1.5rem 0 0.5rem;
//           color: #2d3748;
//         }
        
//         .section-description {
//           color: #718096;
//           font-size: 0.9rem;
//           margin-bottom: 1rem;
//         }
        
//         .form-field {
//           margin-bottom: 1.5rem;
//         }
        
//         label {
//           display: block;
//           font-weight: 500;
//           margin-bottom: 0.5rem;
//           color: #4a5568;
//           font-size: 0.9rem;
//         }
        
//         .styled-input {
//           width: 100%;
//           padding: 0.75rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           background-color: #fff;
//           transition: all 0.2s ease;
//           font-size: 0.9rem;
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//         }
        
//         .styled-input:focus {
//           outline: none;
//           border-color: #4299e1;
//           box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
//         }
        
//         .input-with-icon-right {
//           position: relative;
//         }
        
//         .input-icon {
//           position: absolute;
//           right: 0.75rem;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #a0aec0;
//           pointer-events: none;
//         }
        
//         .calendar-container {
//           margin-top: 1.5rem;
//         }
        
//         .styled-datepicker {
//           width: 100%;
//           border-radius: 0.75rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           padding: 1.25rem;
//           background: white;
//           border: 1px solid #e2e8f0;
//         }
        
//         .styled-calendar {
//           border: none;
//           font-family: inherit;
//           width: 100%;
//         }
        
//         .calendar-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 1rem;
//           padding: 0 0.5rem;
//         }
        
//         .calendar-month-year {
//           display: flex;
//           gap: 0.75rem;
//         }
        
//         .calendar-nav-button {
//           background: none;
//           border: none;
//           font-size: 1rem;
//           cursor: pointer;
//           color: #4a5568;
//           padding: 0.5rem;
//           border-radius: 0.5rem;
//           transition: all 0.2s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 2rem;
//           height: 2rem;
//           background-color: #f7fafc;
//         }
        
//         .calendar-nav-button:hover {
//           background-color: #edf2f7;
//           color: #2d3748;
//         }
        
//         .calendar-nav-button:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }
        
//         .calendar-select {
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           padding: 0.375rem 0.75rem;
//           font-size: 0.875rem;
//           background-color: white;
//           color: #4a5568;
//           cursor: pointer;
//           font-weight: 500;
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//         }
        
//         .calendar-select:focus {
//           outline: none;
//           border-color: #4299e1;
//         }
        
//         .react-datepicker__month-container {
//           width: 100%;
//         }
        
//         .react-datepicker__header {
//           background-color: white;
//           border-bottom: 1px solid #e2e8f0;
//           padding-top: 0;
//         }
        
//         .react-datepicker__day-names {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 1rem;
//           padding: 0 0.5rem;
//         }
        
//         .react-datepicker__day-name {
//           color: #718096;
//           font-weight: 500;
//           font-size: 0.8rem;
//           width: 2.25rem;
//           line-height: 2.25rem;
//         }
        
//         .react-datepicker__week {
//           display: flex;
//           justify-content: space-between;
//           padding: 0.25rem 0.5rem;
//         }
        
//         .calendar-day {
//           padding: 0.375rem;
//           border-radius: 50%;
//           text-align: center;
//           cursor: pointer;
//           width: 2.25rem;
//           height: 2.25rem;
//           line-height: 1.5rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0.125rem;
//           font-size: 0.875rem;
//           transition: all 0.2s ease;
//           border: 2px solid transparent;
//         }
        
//         .calendar-day:hover {
//           background-color: #edf2f7;
//         }
        
//         .calendar-day.available {
//           background-color: #ebf8ff;
//           color: #;
//           font-weight: 500;
//         }
        
//         .calendar-day.blocked {
//           background-color: #fed7d7;
//           color: #e53e3e;
//           text-decoration: line-through;
//           opacity: 0.7;
//         }
        
//         .react-datepicker__day--selected, 
//         .react-datepicker__day--in-selecting-range, 
//         .react-datepicker__day--in-range {
//           background-color: #;
//           color: white;
//           font-weight: 600;
//         }
        
//         .react-datepicker__day--disabled {
//           color: #cbd5e0;
//           cursor: not-allowed;
//         }
        
//         .react-datepicker__day--outside-month {
//           color: #cbd5e0;
//         }
        
//         .date-range-info {
//           background-color: #f7fafc;
//           padding: 1.25rem;
//           border-radius: 0.75rem;
//           margin: 1.5rem 0;
//           border: 1px solid #e2e8f0;
//           box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
//         }
        
//         .info-item {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 0.75rem;
//           font-size: 0.9rem;
//         }
        
//         .info-label {
//           font-weight: 500;
//           color: #718096;
//         }
        
//         .info-value {
//           font-weight: 600;
//           color: #2d3748;
//         }
        
//         .days-grid {
//           display: grid;
//           grid-template-columns: repeat(7, 1fr);
//           gap: 0.5rem;
//           margin-top: 0.5rem;
//         }
        
//         .day-pill {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0.5rem;
//           border-radius: 0.5rem;
//           background-color: #f7fafc;
//           color: #718096;
//           cursor: pointer;
//           font-size: 0.875rem;
//           transition: all 0.2s ease;
//           border: 1px solid #e2e8f0;
//         }
        
//         .day-pill.active {
//           background-color: #ebf8ff;
//           color: #;
//           font-weight: 600;
//           border-color: #bee3f8;
//           box-shadow: 0 1px 2px 0 rgba(66, 153, 225, 0.2);
//         }
        
//         .blocked-dates-list {
//           margin-top: 1rem;
//         }
        
//         .blocked-dates-list ul {
//           padding: 0;
//           margin: 0;
//           list-style: none;
//         }
        
//         .blocked-date-item {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0.75rem 1rem;
//           background-color: #fff5f5;
//           border-radius: 0.5rem;
//           margin-bottom: 0.5rem;
//           border: 1px solid #fed7d7;
//           font-size: 0.875rem;
//         }
        
//         .remove-item-button {
//           background: none;
//           border: none;
//           color: #e53e3e;
//           cursor: pointer;
//           padding: 0.25rem;
//           border-radius: 0.25rem;
//           transition: all 0.2s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .remove-item-button:hover {
//           background-color: #fed7d7;
//         }
        
//         .validation-error {
//           color: #e53e3e;
//           background-color: #fff5f5;
//           padding: 0.75rem 1rem;
//           border-radius: 0.5rem;
//           margin-bottom: 1rem;
//           font-size: 0.875rem;
//           border: 1px solid #fed7d7;
//         }
        
//         .form-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1rem;
//           margin-bottom: 1.5rem;
//         }
        
//         .custom-select-wrapper {
//           position: relative;
//         }
        
//         .styled-select {
//           width: 100%;
//           padding: 0.75rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           background-color: #fff;
//           appearance: none;
//           font-size: 0.9rem;
//           color: #4a5568;
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//         }
        
//         .select-icon {
//           position: absolute;
//           right: 0.75rem;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #a0aec0;
//           pointer-events: none;
//         }
        
//         .content-actions {
//           display: flex;
//           justify-content: flex-end;
//           gap: 1rem;
//           margin-top: 2rem;
//         }
        
//         .button-primary {
//           background-color: #;
//           color: white;
//           border: none;
//           padding: 0.75rem 1.5rem;
//           border-radius: 0.5rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
//         }
        
//         .button-primary:hover {
//           background-color: #2b6cb0;
//         }
        
//         .button-secondary {
//           background-color: white;
//           color: #;
//           border: 1px solid #;
//           padding: 0.75rem 1.5rem;
//           border-radius: 0.5rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
//         }
        
//         .button-secondary:hover {
//           background-color: #ebf8ff;
//         }
        
//         .field-note {
//           color: #a0aec0;
//           font-size: 0.8rem;
//           margin-top: 0.5rem;
//         }
        
//         @media (max-width: 768px) {
//           .form-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .days-grid {
//             grid-template-columns: repeat(4, 1fr);
//           }
          
//           .content-actions {
//             flex-direction: column;
//           }
          
//           .button-primary, .button-secondary {
//             width: 100%;
//           }
//         }
//         .color-themes-grid {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 1rem;
//   margin-top: 1rem;
// }

// .color-theme-card {
//   height: 80px;
//   border-radius: 8px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   padding: 0.5rem;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   position: relative;
//   overflow: hidden;
// }

// .color-theme-card.active {
//   box-shadow: 0 0 0 3px var(--primary-color);
//   transform: scale(1.05);
// }

// .color-theme-name {
//   background-color: rgba(0,0,0,0.7);
//   color: white;
//   padding: 0.25rem 0.5rem;
//   border-radius: 4px;
//   font-size: 0.8rem;
// }

// .funnel-types-grid {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 1rem;
//   margin-top: 1rem;
// }

// .funnel-type-card {
//   border: 1px solid #e2e8f0;
//   border-radius: 8px;
//   padding: 1rem;
//   cursor: pointer;
//   transition: all 0.2s ease;
// }

// .funnel-type-card:hover {
//   border-color: var(--primary-color);
//   transform: translateY(-2px);
// }

// .funnel-type-card h4 {
//   margin: 0 0 0.5rem 0;
//   font-size: 1rem;
// }

// .funnel-type-card p {
//   margin: 0;
//   font-size: 0.8rem;
//   color: #64748b;
// }
//         `}</style>
//     </div>

//   );
// };

// export default FunnelEditorView;
