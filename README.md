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
- No global state used / No redux or context . Parent component performs Network calls & childs are mostly simple components recieing data as prop.
- Filters
    - Completed sort by multiple fields combined with search.
    - if Database (mysql) use was allowed, queries would be more fine tuned.
    
remaining improvements- 
  - mysql (if okay to use) to do accurate querying over specific fields for search.
  - useStaticProps to get intial Data
  - sorting on UI to reduce network calls. ( As per requiremnt mentioned it is done on API)
  - Unit test on API
  
