/*componet
   1.bold 2.font 3.italic 4.text-Height 5.text Width 6.alignleft 7.alignCenter
   8.alignJustify 7.list 10.image 11.photes 12.pencil 13.map 14.edit 15.adjust 
   16.pause stop arrows check-square-o */

var content="";//global variable
var bold = 0 ;
var italic = 0 ;
var underline = 0 ;
var i = 0 ;
var colori = 0 ;
var bgi = 0 ;
var adjusti = 0 ;
var editor = {
             comp_1 : "italic",
             comp_2 : "bold",
             comp_3 : "center",
             comp_6 : "justify",
             comp_4 : "left",
             comp_5 : "right",
             ulStyle : "",
             ulColor : "",
             ltStyle : "",
             ltColor : "",
             emphStrct : "",
             emphStrctColor : "",
             strokeLevel : "",
             olStyle : "",
             olColor : "",
             paddingLeft : "3%",
             paddingRight : "3%",
             font    : ["cursive" , "cursive","monospace" ,"none" , "sans-serif","serif"], 
             fontSize : 15 ,
             fontColor : ["aliceblue" , "antiquewhite","aqua" ,"aquamarine" , "azure","azure","blue","green","yellow","red","black","crimson","brown","cedetblue","tomato","puple","pink"],
             highlightColor : "",
             backgroundColor : ["aliceblue" , "antiquewhite","aqua" ,"aquamarine" , "azure","azure","blue","green","yellow","red","black","crimson","brown","cedetblue","tomato","puple","pink","chocolate","coral","darkgray","darkolivegreen","indigo"],
             
             
             italic : function(){
                 
                
                  if(italic == 0){
                     document.getElementById("txt").style.fontStyle=this.comp_1;
                     italic = 1 ;
                     
                 }
                 else{
                      document.getElementById("txt").style.fontStyle="normal";
                      italic = 0 ;
                     
                 }
             },
             bold :   function(){
                 
                 
                 if(bold == 0){
                     document.getElementById("txt").style.fontWeight=this.comp_2;
                     bold = 1 ;
                     
                 }
                 else{
                     document.getElementById("txt").style.fontWeight="normal";
                     bold = 0 ;
                     
                 }
             
             },
            alignLeft :   function(){document.getElementById("txt").style.textAlign=this.comp_4;},
            alignRight :   function(){document.getElementById("txt").style.textAlign=this.comp_5;},
                        
            alignCenter :   function(){document.getElementById("txt").style.textAlign=this.comp_3;},
        alignJustify :   function(){document.getElementById("txt").style.textAlign=this.comp_6;},

            underlineLine   :   function(){
                if(underline == 0){
                document.getElementById("txt").style.textDecorationLine="underline";
                underline =1 ;
                
                }
                else{
                     document.getElementById("txt").style.textDecorationLine="none";
                underline = 0 ;
                }
                },
    
            underlineStyle   :   function(){document.getElementById("txt").style.textDecorationStyle=this.ulStyle;},
    
             underlineColor  :   function(){document.getElementById("txt").style.textDecorationLine=this.ulColor;},
    
           
            emphasis         :    function()
                                  {document.getElementById("txt").style.webkitTextEmphasisStyle=this.emphStrct;},
            emphasisColor    : function()
             {document.getElementById("txt").style.webkitTextEmphasisColor=this.emphStrctColor;},
            stroke        :      function()
                                  {document.getElementById("txt").style.webkitTextStroke=this.strokeLevel;},
             linethroughLine   :   function(){document.getElementById("txt").style.textDecorationLine="line-through";},
    
            linethroughStyle   :   function(){document.getElementById("txt").style.textDecorationStyle=this.ltStyle;},
    
             linethroughColor  :   function(){document.getElementById("txt").style.textDecorationLine=this.ltColor;},
             
             overlineLine   :   function(){document.getElementById("txt").style.textDecorationLine="overline";},
    
            overlineStyle   :   function(){document.getElementById("txt").style.textDecorationStyle=this.olStyle;},
    
             overlineColor  :   function(){document.getElementById("txt").style.textDecorationLine=this.olColor;},
    /*code to be run during loading of the document*/
             leftPadding    : function()
             {document.getElementById("txt").style.paddingLeft=this.padddingLeft;},
              rightPadding    : function()
             {document.getElementById("txt").style.paddingRight=this.padddingRight;},
    
         //fonts functions
             fontFamily    : function()
             { 
                 document.getElementById("txt").style.fontFamily=this.font[i];
                 if(i == this.font.length)
                     i = 0 ; 
                 i++;
             },
             sizeFont    : function()
             {
                 if(this.fontSize == 0){
                     document.getElementById("txt").style.fontSize= "18px";
                     this.fontSize = 1 ;
                 }
                 else{
                      document.getElementById("txt").style.fontSize= "15px";
                     this.fontSize = 0 ;
                     
                 }
                
                 
             },
             colorFont    : function()
             {
                 
                 var elm = document.getElementById("txt") ;
                
                 elm.style.color=this.fontColor[colori++];
                 if(colori == this.fontColor.length)
                     colori = 0 ;
             },
             bgColor    : function()
             {
                 
                 document.getElementById("txt").style.backgroundColor=this.backgroundColor[bgi++];
                 if(bgi == this.backgroundColor.length)
                     bgi == 0 ;
             
             },
              capitalize       :    function()
                                  {document.getElementById("txt").style.textTransform="capitalize";},
            uppercase       :    function()
                                   {document.getElementById("txt").style.textTransform="uppercase";},
            lowercase       :    function()
                                  {document.getElementById("txt").style.textTransform="lowercase";},
            incrfsize       :    function()
                                 {
                                     this.fontSize++;
                                     document.getElementById("txt").style.fontSize=this.fontSize;
                                 },
            getContent      :   function()
                                {
                                    var cont=document.getElementById("txt").value;
                                    content=cont;
                                },
            adjust          :  function(){
                               if(adjusti == 0){
                               var elm = document.getElementById('txt') ;
                               elm.style.backgroundColor = "black" ;
                               elm.style.color = "white" ;
                               adjusti = 1 ;
                               }
                               else{
                                   var elm = document.getElementById('txt') ;
                               elm.style.backgroundColor = "white" ;
                               elm.style.color = "black" ;
                               adjusti = 0 ;
                               }
            }
                
    
    
};

var manplt={
             
             find : function()
                    {
                        
                    },
            replace : function()
                      {
    
                      },
            count : function()
                     {   }
};

/* Custome Element and Extends Elements */

/*var proto=Object.create(HTMLTextAreaElement.prototype);

proto.createdCallback =function()
                        { this.addEventListener('input',this.fetch);               }
proto.fetch = function()
              {content=document.getElementById('cel').value;
               }
var Etext=document.registerElement('ex-text',
                        {
                        prototype :
                           proto,
                        extends :
                           "textarea"
                     
                 
});
var w=document.createElement('textarea','ex-text');
document.body.appendChild(w);
w.id='cel';*/











                            













































