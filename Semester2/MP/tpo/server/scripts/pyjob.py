import requests
from bs4 import BeautifulSoup

def scrape_linkedin_jobs():
    # URL for Software Engineer job listings on LinkedIn
    url = "https://www.linkedin.com/jobs/search/?keywords=Software%20Engineer&location=Worldwide&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"

    # Send a GET request to the URL
    response = requests.get(url)

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, "html.parser")

    # Find all job listing cards
    job_cards = soup.select(".base-search-card__info")

    # Extract job data from the first 10 cards
    jobs = []
    for card in job_cards[:10]:
        job_title_elem = card.select_one(".base-search-card__title")
        job_title = job_title_elem.text.strip() if job_title_elem else ""

        company_name_elem = card.select_one(".hidden-nested-link")
        company_name = company_name_elem.text.strip() if company_name_elem else ""

        job_location_elem = card.select_one(".job-search-card__location")
        job_location = job_location_elem.text.strip() if job_location_elem else ""

        jobs.append({
            "job_title": job_title,
            "company_name": company_name,
            "job_location": job_location
        })
    # Print the job listings
    print("Software Engineer Jobs (LinkedIn):")
    for job in jobs:
        print(f"Title: {job['job_title']}")
        print(f"Company: {job['company_name']}")
        print(f"Location: {job['job_location']}")
        print("-----------------------------------")

# Call the scrape_linkedin_jobs function
scrape_linkedin_jobs()