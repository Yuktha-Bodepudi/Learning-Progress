let post = new Post('a','b','c');
console.log(post);
function Post(street,city,zipcode){
  this.street=street;
    this.city=city;
    this.zipcode=zipcode;
	this.comments=[];
	this.isLive=true;
}