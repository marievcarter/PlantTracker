from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://localhost:3000/plants")

# buttons we can click on
driver.find_element(By.LINK_TEXT, "PROFILE").click()

driver.quit()
