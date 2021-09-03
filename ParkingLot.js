class ParkingLot {
    // Add the methods here
    constructor(slots) {
        this.slots = slots; // 1 to Slots
        this.parking = new Array(slots).fill(null);
    }
    
    park(carId) {
        for (let x =0; x < this.slots; x++) {
            if (this.parking[x] === null) {
                this.parking[x] = carId;
                return true;
            }
        }

        return false;
    }
    
    getSlots() {
        console.log(this.parking);
    }
    
    remove(carId) {
        let index = this.parking.indexOf(carId);

        if (index) {
            this.parking.splice(index, 1, null);
            return true;
        }
        return false;
    }
}


const parking = new ParkingLot(5);
parking.park('Car-10');
parking.park('Car-20');
parking.park('Car-30');
parking.getSlots()
parking.remove('Car-10');
console.log(parking.getSlots())


/*
<div class="layout-pane__container"><div id="main-splitpane-left" class="coding-question__left-pane"><section class="question-view__title-wrapper"><h1 class="question-view__title">1. JavaScript: Parking Lot</h1></section><section class="question-view__instruction"><div class="candidate-rich-text"><div id="cn4hsqdqm6t-instruction"><p>Create a solution to manage a parking lot.</p>

<p>&nbsp;</p>

<p>Implement the&nbsp;<em>ParkingLot</em>&nbsp;class that&nbsp;manages a parking lot with a number of slots or spaces.&nbsp;The class has the following constructor and methods:</p>

<ol>
    <li>The constructor&nbsp;<em>ParkingLot</em><em>(slots)&nbsp;</em>where parameter <em>slots</em> is the size of the parking lot.&nbsp; Slots are numbered consecutively from&nbsp;<em>1</em>&nbsp;to&nbsp;<em>slots, [1, 2, 3, ..., slots].</em>
</li>
    <li>The method&nbsp;<em>park(carId)</em>&nbsp;-&nbsp;Parks the car with the given <em>carId</em> at the unoccupied slot with the lowest number and returns&nbsp;true. If all slots are occupied, the car is not parked and it returns&nbsp;false.</li>
    <li>The method&nbsp;<em>getSlots</em><em>() - </em>Returns an&nbsp;array of all the parking slots where the i<sup>th</sup> element is the id of the car parked there, or null if the slot is unoccupied.</li>
    <li>The method&nbsp;<em>remove(carId)</em>&nbsp;-&nbsp;Frees the parking slot where&nbsp;the car is parked&nbsp;and returns&nbsp;true. It returns false if a car with the given <em>carId</em> is not found.</li>
</ol>

<p>&nbsp;</p>

<p>The locked stub&nbsp;code validates the correctness of the&nbsp;<em>ParkingLot</em>&nbsp;class implementation by performing the following operations:</p>

<ul>
    <li>
<em>Park carId</em>: If the return value of the&nbsp;call is true, it prints 'Parking Started: &lt;<em>carId</em><em>&gt;' .&nbsp; </em>Otherwise, &nbsp;it prints 'Parking Full: &lt;<em>carId</em><em>&gt;</em>'.</li>
    <li>
<em>Remove carId</em>:&nbsp;If the return value is true, it prints 'Car id &lt;<em>carId</em><em>&gt;</em> removed from parking<em>'.&nbsp;</em>Otherwise, it prints 'Car: &lt;<em>carId</em><em>&gt;&nbsp;</em>not found'.</li>
    <li>
<em>GetSlots</em>: For an occupied slot, it prints 'Parked at slot &lt;slotNumber&gt;: &lt;<em>carId</em><em>&gt;</em>'. For an unoccupied slot, it prints 'Slot &lt;slotNumber&gt; is empty'.</li>
</ul>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>
    <li>The maximum number of method calls is 15.</li>
    <li>At any time, no two parked cars have the same&nbsp;<em>carId.</em>
</li>
</ul>

<p>&nbsp;</p>

<p>
<style type="text/css">.ps-content-wrapper-v0 div { margin: 0 auto; overflow: auto; } .ps-content-wrapper-v0 div.preheader { display: none; } .ps-content-wrapper-v0 p { white-space: pre-wrap; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 p.section-title { font-weight: bold; padding-bottom: 0px; } .ps-content-wrapper-v0 ol.plain-list, .ps-content-wrapper-v0 ul.plain-list { list-style-type: none; padding: 4px; } .ps-content-wrapper-v0 li { white-space: normal; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 code { color: black; } .ps-content-wrapper-v0 pre { background-color: #f4faff; border: 0; border-radius: 2px; margin: 8px; padding: 10px; } .ps-content-wrapper-v0 pre.scrollable-full-json { overflow-x: scroll; white-space: pre; } .ps-content-wrapper-v0 pre.scrollable-json { height: 300px; overflow-y: scroll; display: inline-grid; white-space: pre-wrap; padding-left: 8px; padding-right: 8px; padding-top: 4px; padding-bottom: 4px; } .ps-content-wrapper-v0 div.equation-parent { width: 400px; text-align: center; border: 1px solid #000; padding: 8px; } .ps-content-wrapper-v0 div.equation-parent.equation { width: 100%; display: inline-block; } .ps-content-wrapper-v0 figure { background-color: transparent; display: table; margin-top: 8px; margin-bottom: 8px; text-align: center; margin-left: auto; margin-right: auto; } .ps-content-wrapper-v0 figcaption { text-align: center; display: table-caption; caption-side: bottom; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 img { width: auto; max-width: 100%; height: auto; } .ps-content-wrapper-v0 details { background-color: transparent; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; } .ps-content-wrapper-v0 details details { padding-left: 8px; padding-right: 8px; } .ps-content-wrapper-v0 details summary { background-color: #39424e; color: white; font-weight: bold; margin-top: 4px; margin-bottom: 4px; padding: 8px; } .ps-content-wrapper-v0 details details summary code { color: black; font-weight: bold; padding-left: 2px; padding-right: 2px; padding-top: 4px; padding-right: 4px; margin-left: 4px; } .ps-content-wrapper-v0 details div.collapsable-details { margin: 0 auto; padding-left: 4px; padding-right: 4px; padding-top: 0px; padding-bottom: 2px; overflow: auto; } .ps-content-wrapper-v0 details div.collapsable-details pre { margin-left: 4px; margin-right: 4px; margin-top: 4px; margin-bottom: 4px; } .ps-content-wrapper-v0 table.normal { border: 1px solid black; border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; width: 96%; table-layout: fixed; } .ps-content-wrapper-v0 table.normal tbody { display: block; overflow-x: auto; overflow-y: hidden; } .ps-content-wrapper-v0 table.normal tbody tr:first-child th { font-weight: bold; white-space: normal; } .ps-content-wrapper-v0 table.normal tbody tr th, .ps-content-wrapper-v0 table.normal tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table { border-collapse: collapse; border-color: darkgray; border: 1px solid black; width: auto; margin-left: 4px; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody { overflow-x: auto; overflow-y: hidden; border: none; } .ps-content-wrapper-v0 table.database-table tbody tr th, .ps-content-wrapper-v0 table.database-table tbody tr td { font-weight: normal; white-space: nowrap; text-align: center; vertical-align: middle; border: 1px solid black; border-color: darkgray; padding: 8px; } .ps-content-wrapper-v0 table.database-table tbody tr th { font-weight: bold; border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(2) td { border: 1px solid black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:first-child { border-left-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:nth-child(n+2) td:last-child { border-right-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr:last-child td { border-bottom-color: black; } .ps-content-wrapper-v0 table.database-table tbody tr td.description { text-align: left; white-space: pre-wrap; } .ps-content-wrapper-v0 table.normal tbody tr th.description { width: 60%; } .ps-content-wrapper-v0 table.function-params tbody tr:first-child td.headers { border-bottom-width: 2px; } .ps-content-wrapper-v0 table.function-params tbody tr:last-child td { border-top-width: 2px; border-top-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.headers { width: 25%; font-weight: bold; text-align: center; border: 1px solid black; border-right-width: 2px; border-color: darkgray; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell { width: 100%; height: 100%; padding: 0px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table { width: 100%; height: 100%; padding: 0px; margin: 0px; border: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td.code { white-space: normal; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th { border-top: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr th:last-child { border-right: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr:last-child td { border-bottom: 0; border-top-width: 1px; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:first-child { border-left: 0; } .ps-content-wrapper-v0 table.function-params tbody tr td.params-table-cell table.params-table tbody tr td:last-child { border-right: 0; } .ps-content-wrapper-v0 table.sudoku { border-collapse: collapse; border-color: darkgray; margin: 0 auto; margin-top: 8px; margin-bottom: 8px; padding: 8px; } .ps-content-wrapper-v0 table.sudoku colgroup, tbody { border: 3px solid black; } .ps-content-wrapper-v0 table.sudoku td { border: 1px solid black; height: 25px; width: 25px; text-align: center; padding: 0; } .ps-content-wrapper-v0 .left { text-align: left; } .ps-content-wrapper-v0 .right { text-align: right; } .ps-content-wrapper-v0 .code { font-family: monospace; white-space: nowrap; } .ps-content-wrapper-v0 .json-object-array ol, .ps-content-wrapper-v0 .json-object-array ol ul { margin-top: 0px; padding-left: 14px; } .json-object-array li { float: left; margin-right: 30px; margin-left: 10px; } .json-object-array pre { padding: 4px; margin-left: 0px; }
</style>
</p>

<div class="ps-content-wrapper-v0">
<!-- <StartOfInputFormat> DO NOT REMOVE THIS LINE-->
<details><summary class="section-title">Input Format For Custom Testing</summary>

<div class="collapsable-details">
<p>The first line contains an integer, <em>n</em>, the number of slots in the <em>ParkingLot</em> object.</p>

<p>The second line contains an integer, <i>m</i>, the number of operations to be performed.<br>
Each line <em>i</em> of the <em>m</em> subsequent lines (where <em>0 ≤ i &lt; m</em>) contains one of the three operations listed above with parameters if required.</p>
</div>
</details>
<!-- </StartOfInputFormat> DO NOT REMOVE THIS LINE-->

<details open="open"><summary class="section-title">Sample Case 0</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input For Custom Testing</p>

<pre>STDIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Function
-----&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  --------
5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; →&nbsp;&nbsp;&nbsp;&nbsp;<i>n = 5</i>
6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; →&nbsp;&nbsp;&nbsp;&nbsp;m = 6
Park CAR-10&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp;first operation
Park CAR-20
Park CAR-30
GetSlots
Remove CAR-20
GetSlots&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp;sixth operation
</pre>

<p>&nbsp;</p>

<p class="section-title">Sample Output</p>

<pre>Parking Lot created with number of slots as 5
Parking Started: CAR-10
Parking Started: CAR-20
Parking Started:&nbsp;CAR-30
Parked at slot 1: CAR-10
Parked at slot 2: CAR-20
Parked at slot 3: CAR-30
Slot 4 is empty
Slot 5 is empty
Car id CAR-20 removed from parking
Parked at slot 1: CAR-10
Slot 2 is empty
Parked at slot 3: CAR-30
Slot 4 is empty
Slot 5 is empty
</pre>

<p class="section-title">Explanation</p>

<p>Since the first line of input is 5, a parking lot object is created with 5 slots. The second line of inputs tells there are 6 total operations to be performed. Each Park operation parks the car with the given <em>carId</em>. The GetSlots operation gets the current status and prints the information of each slot. Each Remove operation removes the car with given the <em>carId</em> from the parking lot object.</p>
</div>
</details>
</div>
</div></div></section></div></div>
*/