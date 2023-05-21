class ApiFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

filter=()=>{
   
    const queryObj = {...this.queryString};
    const excludeFields =["sort","fields"];
    excludeFields.forEach(field=> delete queryObj[field]);
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) =>`$${match}`);  
    this.query.find(JSON.parse(queryString)); 
    return this;
    }

sort=()=>{
    if(this.queryString.sort)
    {
        const sortcon= this.queryString.sort.split(',').join(' ');
        this.query.sort(sortcon);
    }
    else
    {
        this.query.sort("name");
    }
    return this;
    }
}
limitFields=()=>{ 
    if(this.queryString.fields)
    {
        const fields = this.queryString.fields.split(',').join(' ');
        console.log(fields);
        this.query.select(fields);
    }   
return this;
}

module.exports= ApiFeatures; 
