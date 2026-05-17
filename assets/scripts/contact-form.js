const FORM_ENDPOINT = "https://formspree.io/f/xwvzeqjz";

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.className = "loading";
  status.textContent = "Sending...";

  const data = new FormData(form);

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      status.className = "success";
      status.textContent = "Message sent successfully! I'll get back to you soon.";
      form.reset();
    } else {
      throw new Error("Server error");
    }
  } catch {
    status.className = "error";
    status.textContent = "Something went wrong. Please try again later.";
  }
});
