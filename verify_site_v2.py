import re
from playwright.sync_api import Page, expect

def test_verify_site_updates(page: Page):
    # 1. Check Home page for Testimonials
    page.goto("http://localhost:5177")
    expect(page.get_by_role("heading", name="What Our Customers Say")).to_be_visible()
    page.screenshot(path="/home/jules/verification/screenshots/home_with_testimonials.png", full_page=True)

    # 2. Check Quote Form for Address field
    page.goto("http://localhost:5177/contact")
    # Using filter to be specific since there might be labels with similar text
    expect(page.get_by_text("Property Address")).to_be_visible()
    expect(page.locator('input[name="address"]')).to_be_visible()

    # Fill the form including address
    page.fill('input[name="name"]', "Verification Bot")
    page.fill('input[name="email"]', "bot@verify.com")
    page.fill('input[name="phone"]', "021 999 9999")
    page.fill('input[name="address"]', "123 Test St, Christchurch")
    page.select_option('select[name="service"]', "Lawn & Garden Maintenance")
    page.fill('textarea[name="details"]', "Testing the new address field and backend submission.")

    page.screenshot(path="/home/jules/verification/screenshots/contact_form_with_address.png")

    # Submit
    page.get_by_role("button", name="Get My Free Quote").click()

    # Wait for success message
    expect(page.get_by_role("heading", name="Message Sent!")).to_be_visible()
    page.screenshot(path="/home/jules/verification/screenshots/quote_form_submitted_new.png")
