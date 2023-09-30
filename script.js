//your code here!

const scrollContainer=document.getElementById('infi-list');
let i=0;
function addOneitem() {
	const li=document.creatElement('li');
	li.innerText=`Item ${++i}`;
	scrollContainer.appendChild(li);
	
}

for(let i=0;i<10;i++)
	{
		addOneitem()
	}
scrollContainer.addEventListener('scroll',()=>{
	const maxScrollHight=
		scrollContainer.scrollHeight-scrollContainer.clientHeight;
	let currentScrolltop=scrollContainer.scrollTop;
	let thresold=Math.abs(maxScrollHight-currentScrolltop)
	if(th<=5){
		for(let i=0;i<2;i++)
			{
				addOneitem()
			}
	}
})