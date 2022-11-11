# PlantUml

## Diagrams
### Salt (Wireframe)
* A window must start and end with brackets. 
* You can then define:
  * Button using **[ text ]**
  * Radio button using **( and )**
  * Checkbox using **[ and ]**
  * User text area using **" "**
  * Droplist using **^ ^**
  * **.** for filling vertical space
  * **|** for separating columns
* Example:
    >```
    >@startsalt
    >{
    >  * Just plain text
    >  [This is my button]
    >  ()  Unchecked radio
    >  (X) Checked radio
    >  []  Unchecked box
    >  [X] Checked box
    >  "Enter text here   "
    > .
    > ^This is a droplist^
    > .
    >  {+  
    >    This is test area
    >    . 
    >    "                   "
    >  }
    > .
    >  {SI  
    >    This is test area with vertical    >scrollbar
    >    .     
    >    "                          "
    >  }
    >  .
    >  {S-  
    >    This is test area with horizontal  >scrollbar
    >    .     
    >    "                          "
    >  }
    >}
    >@endsalt
    >```
* View
* ![PlantUml View](http://plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/deepaksama/Knowledge/main/plantuml/templates/plantuml-example.puml)
   
## References
* [PlantUml Documentation](https://plantuml.com)
* [Kubernets Diagrams Ref](https://github.com/dcasati/kubernetes-PlantUML)
