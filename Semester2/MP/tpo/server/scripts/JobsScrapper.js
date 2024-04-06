import puppeteer from "puppeteer";

async function JobsScrapper() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // URL for Software Engineer job listings on LinkedIn
    const url = "https://www.linkedin.com/jobs/search/?keywords=Software%20Engineer&location=Worldwide&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0";

    // Navigate to the URL
    await page.goto(url);

    // Wait for job cards to load
    await page.waitForSelector('.base-search-card__info');

    // Extract job data from the first 10 cards
    const jobs = await page.evaluate(() => {
        const jobCards = Array.from(document.querySelectorAll('.base-search-card__info')).slice(0, 10);
        return jobCards.map(card => {
            const jobTitleElem = card.querySelector('.base-search-card__title');
            const jobTitle = jobTitleElem ? jobTitleElem.textContent.trim() : '';

            const companyNameElem = card.querySelector('.hidden-nested-link');
            const companyName = companyNameElem ? companyNameElem.textContent.trim() : '';

            const jobLocationElem = card.querySelector('.job-search-card__location');
            const jobLocation = jobLocationElem ? jobLocationElem.textContent.trim() : '';

            return {
                job_title: jobTitle,
                company_name: companyName,
                job_location: jobLocation
            };
        });
    });

    // Close the browser
    await browser.close();

    return jobs;
}

export default JobsScrapper;
