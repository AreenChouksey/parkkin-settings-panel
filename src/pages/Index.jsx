
import React, { useState } from 'react';
import './AdminSettings.css';

const Index = () => {
  const [settings, setSettings] = useState({
    systemName: 'Parkkin Management',
    maxParkingSpots: 500,
    hourlyRate: 25,
    penaltyRate: 100,
    operatingHours: {
      start: '06:00',
      end: '22:00'
    },
    notifications: {
      email: true,
      sms: true,
      push: true
    },
    security: {
      twoFactor: true,
      sessionTimeout: 30,
      passwordExpiry: 90
    },
    payment: {
      gateway: 'stripe',
      currency: 'INR',
      autoRefund: true
    }
  });

  const [activeTab, setActiveTab] = useState('general');

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <header className="admin-header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="https://www.ewaysservices.com/images/eways.jpg" 
              alt="Eways Services"
              className="company-logo"
            />
            <h1>At Parkkin</h1>
          </div>
          <div className="admin-info">
            <span>Super Admin Panel</span>
            <div className="admin-avatar">SA</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="admin-main">
        <div className="settings-container">
          <div className="settings-header">
            <h2>Administration Settings</h2>
            <p>Manage your parking management system configuration</p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
            <button 
              className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </button>
            <button 
              className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </button>
            <button 
              className={`tab-btn ${activeTab === 'payment' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment')}
            >
              Payment
            </button>
          </div>

          {/* Settings Content */}
          <div className="settings-content">
            {activeTab === 'general' && (
              <div className="settings-section">
                <h3>General Settings</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>System Name</label>
                    <input
                      type="text"
                      value={settings.systemName}
                      onChange={(e) => setSettings({...settings, systemName: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Maximum Parking Spots</label>
                    <input
                      type="number"
                      value={settings.maxParkingSpots}
                      onChange={(e) => setSettings({...settings, maxParkingSpots: parseInt(e.target.value)})}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Hourly Rate (₹)</label>
                    <input
                      type="number"
                      value={settings.hourlyRate}
                      onChange={(e) => setSettings({...settings, hourlyRate: parseInt(e.target.value)})}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Penalty Rate (₹)</label>
                    <input
                      type="number"
                      value={settings.penaltyRate}
                      onChange={(e) => setSettings({...settings, penaltyRate: parseInt(e.target.value)})}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Operating Start Time</label>
                    <input
                      type="time"
                      value={settings.operatingHours.start}
                      onChange={(e) => handleInputChange('operatingHours', 'start', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Operating End Time</label>
                    <input
                      type="time"
                      value={settings.operatingHours.end}
                      onChange={(e) => handleInputChange('operatingHours', 'end', e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="settings-section">
                <h3>Notification Settings</h3>
                <div className="toggle-grid">
                  <div className="toggle-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={settings.notifications.email}
                        onChange={(e) => handleInputChange('notifications', 'email', e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      Email Notifications
                    </label>
                  </div>
                  <div className="toggle-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={settings.notifications.sms}
                        onChange={(e) => handleInputChange('notifications', 'sms', e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      SMS Notifications
                    </label>
                  </div>
                  <div className="toggle-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={settings.notifications.push}
                        onChange={(e) => handleInputChange('notifications', 'push', e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      Push Notifications
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="settings-section">
                <h3>Security Settings</h3>
                <div className="form-grid">
                  <div className="toggle-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={settings.security.twoFactor}
                        onChange={(e) => handleInputChange('security', 'twoFactor', e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      Two-Factor Authentication
                    </label>
                  </div>
                  <div className="form-group">
                    <label>Session Timeout (minutes)</label>
                    <input
                      type="number"
                      value={settings.security.sessionTimeout}
                      onChange={(e) => handleInputChange('security', 'sessionTimeout', parseInt(e.target.value))}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password Expiry (days)</label>
                    <input
                      type="number"
                      value={settings.security.passwordExpiry}
                      onChange={(e) => handleInputChange('security', 'passwordExpiry', parseInt(e.target.value))}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="settings-section">
                <h3>Payment Settings</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Payment Gateway</label>
                    <select
                      value={settings.payment.gateway}
                      onChange={(e) => handleInputChange('payment', 'gateway', e.target.value)}
                      className="form-select"
                    >
                      <option value="stripe">Stripe</option>
                      <option value="razorpay">Razorpay</option>
                      <option value="paytm">Paytm</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Currency</label>
                    <select
                      value={settings.payment.currency}
                      onChange={(e) => handleInputChange('payment', 'currency', e.target.value)}
                      className="form-select"
                    >
                      <option value="INR">INR (₹)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </div>
                  <div className="toggle-group">
                    <label className="toggle-label">
                      <input
                        type="checkbox"
                        checked={settings.payment.autoRefund}
                        onChange={(e) => handleInputChange('payment', 'autoRefund', e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                      Auto Refund on Cancellation
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="settings-actions">
            <button className="btn-secondary">Reset to Default</button>
            <button className="btn-primary" onClick={handleSaveSettings}>
              Save Settings
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🚗</div>
            <div className="stat-content">
              <h4>Active Spots</h4>
              <p>342/500</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h4>Revenue Today</h4>
              <p>₹12,450</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h4>Occupancy Rate</h4>
              <p>68.4%</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h4>Active Users</h4>
              <p>1,247</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
