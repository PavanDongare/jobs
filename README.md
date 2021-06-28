# jobs

github link - https://github.com/PavanDongare/jobs


Full Stack test for clipboard Health

- Deployed on vercel
    local dev - npm run dev
    local deployment - npm run build
                       npm run start
    prop deployment through vercel
    
- Unstable nw connection handleled by cancelling previous requests .
- search input is debounced

- Filters
    - Completed sort by multiple fields combined with search.
    - if Database (mysql) use was allowed, queries would be more fine tuned.
    
remaining improvements- 
  - mysql usage to do accurate querying
  - useStaticProps to get intial Data
  - sorting on UI to reduce network calls. ( As per requiremnt mentioned it is done on API)
  - Unit test on API
  
