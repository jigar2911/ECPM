import os
from playwright.sync_api import sync_playwright

def run_cuj(page):
    print("Navigating to http://localhost:5173...")
    page.goto("http://localhost:5173")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/home.png")

    print("Navigating to Services...")
    page.locator('nav').get_by_role("link", name="Services").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/services.png")

    print("Navigating to Property Managers...")
    page.locator('nav').get_by_role("link", name="Property Managers").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/property_managers.png")

    print("Navigating to Contact...")
    page.locator('nav').get_by_role("link", name="Contact").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/contact.png")

    print("Filling form...")
    page.get_by_placeholder("Your Name").fill("Jules Test")
    page.wait_for_timeout(500)
    page.get_by_placeholder("Email Address").fill("jules@example.com")
    page.wait_for_timeout(500)
    page.get_by_placeholder("Phone Number").fill("021123456")
    page.wait_for_timeout(500)
    page.get_by_role("button", name="Get Quote").click()
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/contact_success.png")

if __name__ == "__main__":
    os.makedirs("verification/videos", exist_ok=True)
    os.makedirs("verification/screenshots", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="verification/videos")
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
