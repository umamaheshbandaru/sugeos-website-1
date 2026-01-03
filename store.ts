
import { useState, useEffect } from 'react';
import { AppState } from './types';
import { INITIAL_STATE } from './constants';

const STORAGE_KEY = 'sugeos_site_data';

export const useAppState = () => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_STATE;
      }
    }
    return INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    
    // Apply theme
    if (state.settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state]);

  const updateSettings = (newSettings: Partial<AppState['settings']>) => {
    setState(prev => ({ ...prev, settings: { ...prev.settings, ...newSettings } }));
  };

  const updateContent = (newContent: Partial<AppState['content']>) => {
    setState(prev => ({ ...prev, content: { ...prev.content, ...newContent } }));
  };

  const addBlogPost = (post: AppState['blogPosts'][0]) => {
    setState(prev => ({ ...prev, blogPosts: [post, ...prev.blogPosts] }));
  };

  const updateBlogPost = (id: string, updatedPost: Partial<AppState['blogPosts'][0]>) => {
    setState(prev => ({
      ...prev,
      blogPosts: prev.blogPosts.map(p => p.id === id ? { ...p, ...updatedPost } : p)
    }));
  };

  const deleteBlogPost = (id: string) => {
    setState(prev => ({
      ...prev,
      blogPosts: prev.blogPosts.filter(p => p.id !== id)
    }));
  };

  return {
    state,
    updateSettings,
    updateContent,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost
  };
};
