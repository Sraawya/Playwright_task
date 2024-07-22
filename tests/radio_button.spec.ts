import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/radio-buttons");
  await expect(page).toHaveTitle(
    /Radio Buttons page for Automation Testing Practice/
  );
});

test("click radio buttons", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/radio-buttons");

  const basketballRadioButton = "input[id='basketball']";
  await page.locator(basketballRadioButton).click();
  await expect(page.locator(basketballRadioButton)).toBeChecked();

  const blackColorRadioButton = "input[id='black']";
  await page.locator(blackColorRadioButton).click();
  await expect(page.locator(blackColorRadioButton)).toBeChecked();

  
});
