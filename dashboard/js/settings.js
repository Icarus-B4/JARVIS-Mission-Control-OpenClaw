/**
 * System Settings Panel (v1.0.0)
 * Handles reading and writing backend configuration via API.
 */

async function openSettingsPanel() {
    console.log('Opening System Settings Panel...');
    const panel = document.getElementById('settings-panel');
    if (!panel) {
        console.error('Settings panel element not found!');
        return;
    }

    panel.classList.add('open');
    panel.style.display = 'block';
    
    // Load current settings
    try {
        const status = document.getElementById('settings-status');
        if (status) status.textContent = 'Loading settings...';

        const settings = await MissionControlAPI.request('/settings');
        
        // Populate form
        if (settings.LLM_PROVIDER) document.getElementById('setting-LLM_PROVIDER').value = settings.LLM_PROVIDER;
        if (settings.OLLAMA_MODEL) document.getElementById('setting-OLLAMA_MODEL').value = settings.OLLAMA_MODEL;
        if (settings.OLLAMA_URL) document.getElementById('setting-OLLAMA_URL').value = settings.OLLAMA_URL;
        if (settings.USER_NAME) document.getElementById('setting-USER_NAME').value = settings.USER_NAME;

        if (status) status.textContent = '';
    } catch (error) {
        console.error('Failed to load settings:', error);
        const status = document.getElementById('settings-status');
        if (status) status.textContent = 'Error loading settings.';
    }
}

function closeSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    if (panel) {
        panel.classList.remove('open');
        panel.style.display = 'none';
    }
}

async function saveSystemSettings(event) {
    event.preventDefault();
    
    const status = document.getElementById('settings-status');
    if (status) {
        status.textContent = 'Saving...';
        status.style.color = 'var(--text-muted)';
    }

    const payload = {
        LLM_PROVIDER: document.getElementById('setting-LLM_PROVIDER').value,
        OLLAMA_MODEL: document.getElementById('setting-OLLAMA_MODEL').value,
        OLLAMA_URL: document.getElementById('setting-OLLAMA_URL').value,
        USER_NAME: document.getElementById('setting-USER_NAME').value
    };

    try {
        const result = await MissionControlAPI.request('/settings', {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        if (status) {
            status.textContent = '✓ Settings saved! Please restart the Elite Agent.';
            status.style.color = '#38a169';
        }
        
        // Auto-close after delay
        setTimeout(() => {
            closeSettingsPanel();
            if (status) status.textContent = '';
        }, 2000);
    } catch (error) {
        console.error('Failed to save settings:', error);
        if (status) {
            status.textContent = '✕ Save failed: ' + error.message;
            status.style.color = '#e53e3e';
        }
    }
}
