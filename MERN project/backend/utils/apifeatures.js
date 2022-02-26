class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    // api ka search feature
    search(){
        const keyword = this.queryStr.keyword
        ?{
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
            },
          }
        :{};

        // console.log(keyword);

        this.query = this.query.find({ ...keyword }); // jo keyword hamne uper se bnaya 
        return this; // search function will return this means yhi class vapas se return kar denge
    }

    filter(){
        
    }
}

module.exports = ApiFeatures;