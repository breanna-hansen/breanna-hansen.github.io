
  document.querySelector('.php-email-form').addEventListener('submit', async function(e) {
    e.preventDefault();  // Stop default POST/reload

    const form = e.target;
    const loading = form.querySelector('.loading');
    const errorDiv = form.querySelector('.error-message');
    const sentDiv = form.querySelector('.sent-message');

    loading.style.display = 'block';
    errorDiv.style.display = 'none';
    sentDiv.style.display = 'none';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });

      const result = await response.json();

      loading.style.display = 'none';

      if (result.success) {
        sentDiv.style.display = 'block';
        form.reset();  // Clear the email field

        // Optional: Manually redirect to your thank-you page
        // window.location.href = result.redirectUrl;

        // Or stay on page and show success message (recommended for UX)
      } else {
        errorDiv.textContent = result.message || 'Something went wrong. Please try again.';
        errorDiv.style.display = 'block';
      }
    } catch (err) {
      loading.style.display = 'none';
      errorDiv.textContent = 'Network error – please check your connection.';
      errorDiv.style.display = 'block';
    }
  });