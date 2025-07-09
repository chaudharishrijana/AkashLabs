import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Star, ExternalLink } from 'lucide-react';
import './ApiPage.css';

const ApiPage = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('javascript');

  useEffect(() => {
    fetchRepositories('javascript');
  }, []);

  const fetchRepositories = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=20`
        
      );

      if (response.status === 403) {
        throw new Error('GitHub rate limit exceeded. Please wait a minute or use a token.');
      }

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      setRepositories(data.items);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRepositories(searchTerm);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="api-page">
      <header className="api-header">
        <div className="container">
          <div className="api-header-content">
            <div className="api-nav">
              <Link to="/" className="back-link">
                <ArrowLeft />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="api-title">GitHub Repository Explorer</h1>
          </div>
        </div>
      </header>

      <main className="api-main">
        <div className="container">
          <div className="search-section">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-container">
                <Search className="search-icon" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search repositories..."
                  className="search-input"
                />
              </div>
              <button type="submit" className="btn btn-primary search-btn">
                Search
              </button>
            </form>
          </div>

          {loading && (
            <div className="loading-container">
              <div className="loading-spinner spin"></div>
            </div>
          )}

          {error && (
            <div className="error-container">
              <div className="error-content">
                <h3 className="error-title">Error</h3>
                <p className="error-message">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="repositories-grid">
              {repositories.map((repo) => (
                <div key={repo.id} className="repo-card">
                  <div className="repo-header">
                    <img
                      src={repo.owner.avatar_url}
                      alt={repo.owner.login}
                      className="repo-avatar"
                    />
                    <div className="repo-meta">
                      <p className="repo-owner">{repo.owner.login}</p>
                      <p className="repo-date">{formatDate(repo.updated_at)}</p>
                    </div>
                  </div>

                  <h3 className="repo-name">{repo.name}</h3>

                  <p className="repo-description">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="repo-footer">
                    <div className="repo-stats">
                      <div className="repo-stat">
                        <Star className="star-icon" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      {repo.language && (
                        <span className="repo-language">{repo.language}</span>
                      )}
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      <ExternalLink />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && repositories.length === 0 && (
            <div className="no-results">
              <Search className="no-results-icon" />
              <h3 className="no-results-title">No repositories found</h3>
              <p className="no-results-text">Try searching for a different term.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ApiPage;
