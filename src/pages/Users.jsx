import React, { useState, useEffect, Suspense } from 'react';
import '../css/user.css';
import UserCard from '../userCard';

const LazyImage = React.lazy(()=> import('../LazyImage'));

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');

    useEffect(() => {
        console.log('fetching users');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const repeated = Array.from({ length: 100 }).flatMap((_, i) =>
                  data.map((user, j) => ({
                    ...user,
                    id: i * data.length + j + 1, // unique id from 1 to 1000
                  }))
                );
                setUsers(repeated);
              })
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const stats = {
        total: users.length,
        filtered: filteredUsers.length,
        active: Math.floor(users.length * 0.8),
        new: Math.floor(users.length * 0.15)
    };

    if (loading) {
        return (
            <div className="user-container">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <div className="loading-text">Loading users...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="user-container">
                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <div className="error-text">Error: {error.message}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="user-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">User Directory</h1>
                    <p className="hero-subtitle">Discover and connect with our community members</p>
                </div>
                <div className="hero-image">
                    <Suspense fallback={<div className="image-placeholder">Loading...</div>}>
                        <LazyImage />
                    </Suspense>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-icon">👥</div>
                    <div className="stat-content">
                        <div className="stat-number">{stats.total}</div>
                        <div className="stat-label">Total Users</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🔍</div>
                    <div className="stat-content">
                        <div className="stat-number">{stats.filtered}</div>
                        <div className="stat-label">Showing</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-content">
                        <div className="stat-number">{stats.active}</div>
                        <div className="stat-label">Active</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🆕</div>
                    <div className="stat-content">
                        <div className="stat-number">{stats.new}</div>
                        <div className="stat-label">New This Week</div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="search-section">
                <div className="search-container">
                    <div className="search-input-wrapper">
                        <span className="search-icon">🔍</span>
                        <input 
                            type="text"
                            placeholder="Search users by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <div className="filter-buttons">
                        <button 
                            className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedFilter('all')}
                        >
                            All
                        </button>
                        <button 
                            className={`filter-btn ${selectedFilter === 'active' ? 'active' : ''}`}
                            onClick={() => setSelectedFilter('active')}
                        >
                            Active
                        </button>
                        <button 
                            className={`filter-btn ${selectedFilter === 'new' ? 'active' : ''}`}
                            onClick={() => setSelectedFilter('new')}
                        >
                            New
                        </button>
                    </div>
                </div>
                <div className="search-results">
                    <span className="results-count">{filteredUsers.length} users found</span>
                    {searchTerm && (
                        <span className="search-term">for "{searchTerm}"</span>
                    )}
                </div>
            </div>

            {/* User Grid */}
            <div className="user-grid-section">
                <div className="user-grid-container">
                    <div className="user-grid">
                        {filteredUsers.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;