var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing')
var By = webdriver.By;
var assert = require('assert');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

var page_state = {};

var readPageState = function(){
	console.log('readPageState');

	return driver.findElements(By.css('.selector_list li'))
	.then(function(elems){
		page_state.initial_block_count = elems.length;
	})
}

var createNewBlock = function(){
	//open form
	driver.findElement(By.css('.create-new .icon-plus')).click();
	var input  = driver.findElement(By.css('.create-new input[type="text"]'));
	var button = driver.findElement(By.css('.create-new input[type="button"]'));
	input.sendKeys('new block'); //TODO: maybe create a random string here
	button.click();
}

var verifyNewBlockCreation = function(){
	return driver.findElements(By.css('.selector_list li'))
	.then(function(elems){
		//console.log('added a block. now there are: ', elems.length, 'blocks in the .selector_list')
		page_state.added_block_count =elems.length;
	});
};

var deleteBlock = function(){

	console.log('deleting block');

	var button = driver.findElement(By.xpath('//*[@id="block-list"]/li[1]/div/a'));
	button.click();
	driver.switchTo().alert().accept();

	return driver.findElements(By.css('.selector_list li'))
	.then(function(elems){
		console.log('removed block: ', elems.length)
		page_state.final_block_count = elems.length;
	});
}


test.describe('/block/builder', function(){

	test.it('should have one more block than it did', function(done){


		driver.get('http://localhost:3000')
		.then(function(){

			driver.manage().addCookie("app_authstring", "22a16e3f087f8e27ab7e63d0dda5c48c");
			return driver.navigate().to('http://localhost:3000/#/build/block')
			.then(readPageState)
			.then(createNewBlock)
			.then(function(){ return driver.sleep(1000)})
			.then(verifyNewBlockCreation)
			.then(function(){
				assert.equal(page_state.initial_block_count + 1, page_state.added_block_count);
			})
		});
	});

	test.it('Deleted a block now we should have the original number of blocks', function(){

		console.log('second test');

		driver.sleep(500)
		.then(deleteBlock)
		.then(function(){
			assert.equal(page_state.initial_block_count, page_state.final_block_count);
		})
	});

	test.it('third test', function(){

		driver.close();
	});

});
