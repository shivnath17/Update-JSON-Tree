let root = [
{
   "name":"John Doe",
   "age":82,
   "children":[
      {
         "name":"Myra Doe",
         "age":35,
         "children":[
            {
               "name":"Sam Singh",
               "age":1,
               "children":[

               ]
            }
         ]
      },
      {
         "name":"Sam Doe",
         "age":37,
         "children":[

         ]
      }
   ]
}
]

function addChild(name,age,data) {
	return data.push({"name": name, "age":age, "children":[]})
}

function findParent(name,age, parentName, data) {
	for(let i = 0; i!= data.length; i++) {
		if (data[i].name && data[i].name == parentName){
			return addChild(name, age, data)
		}
    else if (data[i].children) {
      return findParent(name,age, parentName, data[i].children)
    }
	}
}


findParent("shiv", 18, "Sam Singh", root)
