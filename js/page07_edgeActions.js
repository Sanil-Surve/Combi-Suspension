/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "swipeleft", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "swiperight", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${page4-asset1}", "click", function(sym, e) {
         window.open("page04.html","_self")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${page2-asset2}", "click", function(sym, e) {
         window.open("page06.html","_self")
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-768282051");