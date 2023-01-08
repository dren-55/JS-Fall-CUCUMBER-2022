class Commands {




    /**
     * 
        setValue
        getText
        click
        $
        getAttribute
        isDisplayed
        isEnabled
        isSelected
        selectByVisibleText
        selectByAttribute
        selectByIndex
    
     */
    
        /**
         * Generic function to find webElement
         * input: string(locator)
         */
        async findWebElement(locator) {
            await $(locator).waitForDisplayed({
                timeout: 30000,
                timeoutMsg: 'WebElement is not displayed'
            })
            return await $(locator);
        }
    
        /**
         * Generic function to find webElements
         * input: string(locator)
         */
        async findAllWebElement(locator) {
            await browser.waitUntil(async () =>{
                const totalElements = await $$(locator);
                return totalElements.length >=1
            },{
                timeout: 30000,
                timeoutMsg: 'No more than one element'
            });
            return await $$(locator);
        }
    
        /**
         * Generic function to enter data in a WebElement
         * name: typeInWebElement
         * input: string(dataToEnter), string(locator)
         */
        async typeInWebElement(locator, dataToEnter) {
            /*
                1. find the webElement
                2. if found, type in it
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
           await $(locator).waitForEnabled({
            timeout: 30000,
            timeoutMsg: 'Element is not displayed'
           })
            await $(locator).setValue(dataToEnter);
        }
    
        /**
         * Generic function to click a WebElement
         * name: clickWebElement
         * input: string(locator)
         */
        async clickWebElement(locator) {
            /*
                1. find the webElement
                2. if found, click it
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
           await $(locator).waitForClickable({
            timeout: 50000,
            timeoutMsg: 'Element is not clickable'
           });
            await $(locator).click();
        }
    
        /**
         * Generic function to find if field is enabled
         * name: isWebElementEnabled
         * input: string(locator)
         */
        async isWebElementEnabled(locator) {
            /*
                1. find the webElement
                2. if found, check if element is enabled
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
           await $(locator).waitForEnabled({
            timeout:60000,
            timeoutMsg: 'Element is not enabled'
           });
            return await $(locator).isEnabled();
        }
    
        /**
         * Generic function to get Text of a WebElement
         * name: getTextOfWebElement
         * input: string(locator)
         */
        async getTextOfWebElement(locator) {
            /*
                1. find the webElement
                2. if found, return Text
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
           await $(locator).waitForDisplayed({
            timeout:60000,
            timeoutMsg: 'Element is not displayed'
           })
            return await $(locator).getText();
        }

        async isWebElementDisplayed(locator) {
            await $(locator).waitForDisplayed({
                timeout:60000,
                timeoutMsg: 'Element is not displayed'
               })
            const element = await this.findWebElement(locator);
            return await element.isDisplayed();
        }
    
    
        /**
         * Generic function to get Attribute value of a WebElement
         * name: getAttributeWebElement
         * input: string(locator), string(attrName)
         */
        async getAttributeWebElement(locator, attrName) {
            /*
                1. find the webElement
                2. if found, return attribute value
                3. otherwise, wait for 1-second then start from step-1
    
                do above flow for 30-seconds
            */
           await $(locator).waitForExist({
            timeout:60000,
            timeoutMsg: 'Element does not exist'
           })
            return await $(locator).getAttribute(attrName);
        }

        async scrollElementIntoView(locator) {
            await $(locator).waitForExist({
                timeout:60000,
                timeoutMsg: 'Element does not exist'
               })
            const element = await $(locator);
            await element.scrollIntoView();
        }

        async findParentElement(locator, value) {
            const elem = await this.findWebElement(locator)
            const parent = await elem.parentElement()
            return await parent.getAttribute(value)
        }
    
    
        /**
         * Generic function to select data in dropdown (using Visible text)
         * name: selectDataInDropdown
         * input: locatorDropdown, valueWantToSelect
         */
        async selectDataInDropdown(locator, dataToSelect) {
            await $(locator).waitForDisplayed({
                timeout:60000,
                timeoutMsg: 'Element is not displayed'
            })
            const dropdown = await $(locator);
            dropdown.selectByVisibleText(dataToSelect);
        }

        async getWindowTitle() {
            return await browser.getTitle();
        }

        async getNumberOfWindHandles() {
            return await browser.getWindowHandles()
        }

            //switch handle from current opend window, works for two open windows
    async switchWindowHandle() {
        const allHandles = await this.getNumberOfWindHandles()
        const windowHandle = await browser.getWindowHandle();   // h1

        for (const handle of allHandles) {        // allHandles = [h1, h2]
            if (handle != windowHandle) {
                await browser.switchToWindow(handle);
            }
        }
    }

        async chooseDate(locator, searchBy, thisDate) {
            await $(locator).waitForDisplayed({
                timeout:60000,
                timeoutMsg: 'Element is not displayed'
            })
            const allDates = await $$(locator);
            for(const selectedDate of allDates){
                const date = await selectedDate.getAttribute(searchBy)
                if(date.localeCompare(thisDate) === 0) {
                    await selectedDate.click()
                    break;
                }
            }
        }
    
        /**
         * Generic function to move mouse on any web-Element
         * name: moveMouseOn
         * input: locator
         */
        async moveMouseOn(locator) {
            await $(locator).waitForExist({
                timeout:60000,
                timeoutMsg: 'Element does not exist'
            })
            await $(locator).moveTo();
        }
    
        /**
         * Generic function to get window handle
         * name: getHandle
         * 
         */  
        async getHandle() {
            return await browser.getWindowHandle();
        }
    
        /**
         * Generic function to get ALL window handle
         * name: getHandles
         * 
         */  
        async getHandles() {
            return await browser.getWindowHandles();
        }
    
        /**
         * Generic function to switch to a new handle
         * name: switchToWindowHandle
         * input: newHandle
         * 
         */  
        async switchToWindowHandle(newHandle) {
            return await browser.switchToWindow(newHandle);
        }
        
    async multiClickWebEl(locator, numberOfClicks) {
        const element = await this.findWebElement(locator)
        for (let counter = 1; counter <= numberOfClicks; counter++) {
            await element.click()  
            console.log(`\n\nclick->${counter} numberOfClicks: ${numberOfClicks}\n\n`);
        }
    }
    
    
        /**
         * Generic function to select value from auto-suggestion using getText
         * name: selectFromAutoSuggestion
         * input: locator (for all suggestions), userLikeToSelect
         */
        async selectFromAutoSuggestion(locator, userLikeToSelect) {
            await browser.waitUntil(async () => {
                const totalSuggestions = await $$(locator)
                return totalSuggestions.length>=1
            },{
                timeout: 60000,
                timeoutMsg: 'Number of auto-suggestions are not 1 or more'
            })
            const allSuggestions = await $$(locator);
            for (const suggestion of allSuggestions) {
                const webText = await suggestion.getText();
                if (webText.toLowerCase().localeCompare(userLikeToSelect.toLowerCase()) === 0) {
                    await suggestion.click();
                    break;
                }
            }
        }

        async clearTextField(locator) {
            await $(locator).waitForDisplayed({
                timeout:60000,
                timeoutMsg: 'Element is not displayed'
            })
            const element = await this.findWebElement(locator)
            return await element.clearValue()
        }

        
    
        /**
         * Generic function to select date from calendar using getAttribute
         * name: selectDateInCalendar
         * input: locator (for all dates), dateUserLikesToSelect
         */
        async selectDateInCalendar(locator, dateUserLikesToSelect) {
            await browser.waitUntil(async () => {
                const totalDates = await $$(locator)
                return totalDates.length >= 0
            },{
                timeout:60000,
                timeoutMsg: 'number of dates in the calendar are not more than 1'
            })
            const allDates = await $$(locator);     // [we1, we2, we3, we4, ...]
            
            for (const dateElement of allDates) {
                const dataDayValue = await dateElement.getAttribute('data-day');
                if (dataDayValue.localeCompare(dateUserLikesToSelect) === 0) {
                    await dateElement.click();
                    break;
                }
            }
        }
    
    }
    module.exports = Commands;