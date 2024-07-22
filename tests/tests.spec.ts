import { test, expect } from "@playwright/test";
import { isNull } from "util";
import locators from "./locators";

test("has title", async ({ page }) => {
  //Go to Page

  await page.goto(locators.mainPageURL);
  await expect(page).toHaveTitle(/DEMOQA/);

  page.close()
});

test("fill demoQA form", async ({ page }) => {
  await page.goto(locators.mainPageURL);

  //Enter FirstName and LastName
  await page.fill(locators.firstNameLocator, "test_firstname");
  await page.fill(locators.lastNameId, "test_lastname");

  //Enter Email ID
  await page.fill(locators.userEmailId, "sampleEmail@test.com");

  //Select Gender Radio Button
  const femaleGenderRadioButton = page.locator(
    locators.femaleGenderRadioButton
  );
  await femaleGenderRadioButton.evaluate((el) =>
    el.scrollIntoView({ behavior: "smooth" })
  );
  await femaleGenderRadioButton.evaluate((el) => el.click());

  //Enter User Phonenumber
  await page.fill(locators.userNumberId, "9876543321");

  //Choose Subjects
  await page.fill(locators.subjectInputBoxId, "Computer Science");
  await page.waitForSelector(".subjects-auto-complete__menu");
  await page
    .locator(".subjects-auto-complete__menu-list")
    .locator("div", { hasText: "Computer Science" })
    .click();

  //Select Hobbies
  const sportsCheckBox = page.locator(locators.sportsCheckBoxLocator);
  await sportsCheckBox.evaluate((el) =>
    el.scrollIntoView({ behavior: "smooth" })
  );
  await sportsCheckBox.evaluate((el) => el.click());

  //Enter Current Address
  await page.fill(
    locators.curretnAddressId,
    "ABC ST, UNIT 100, City, State, Zipcode"
  );

  //Enter City
  await page.locator(locators.stateId).click();
  const stateValue = "Uttar Pradesh"; 
  await page.locator(`text=${stateValue}`).first().click();

  //Enter State
  await page.locator(locators.cityId).click();
  const cityValue = "Lucknow";
  await page.locator(`text=${cityValue}`).first().click();

  //Click SubmitButton
  await page.locator(locators.submitButtonId).click();

  page.close()
});
