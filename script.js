let amount=document.getElementById('bill')
let percent=document.getElementById('percent')
let increase=document.getElementById('increment')
let decrease=document.getElementById('decrement')
let person=document.getElementById('people')
let per=document.getElementById('per')
let given=0
let pt=0
let complete=0
let people=1
let final=0
function calculatebill()
{
    given=parseInt(amount.value)
    pt=parseInt(percent.value)

    complete=given+(given*pt/100)
   display()

}
increase.addEventListener('click',()=>{
    people++
    person.textContent=people
    display()
})
decrease.addEventListener('click',()=>{
    if(people<=1){
        return
    }
    people--
    person.textContent=people
    display()
})

function display()
{
    final=complete/people
    per.textContent=final.toFixed(2)
}