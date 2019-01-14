from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time

# start the web driver
driver = webdriver.Chrome()
# change this to new heroku link
driver.get("http://plant-track.herokuapp.com/plants")

'''
try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.LINK_TEXT, "HOME"))
    )
finally:
    driver.quit()
'''

WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.LINK_TEXT, "Ponytail Palm"))
)

time.sleep(5)

# buttons we can click on - is this needed
driver.find_element(By.LINK_TEXT, "Ponytail Palm").click()

time.sleep(5)

# click on the first plant in the group (maybe ponytail palm)

# WebDriverWait(driver, 1000)

# close the page
driver.quit()
