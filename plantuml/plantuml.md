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
    ``` plantuml

    @startsalt
    skinparam dpi 130
    {
    * Just plain text
    [This is my button]
    ()  Unchecked radio
    (X) Checked radio
    []  Unchecked box
    [X] Checked box
    "Enter text here   "
    .
    ^This is a droplist^
    .
    {+  
        This is test area
        . 
        "                   "
    }
    .
    {SI  
        This is test area with vertical scrollbar
        .     
        "                          "
    }
    .
    {S-  
        This is test area with horizontal scrollbar
        .     
        "                          "
    }
    }
    @endsalt
    ```
## References
* [PlantUml Documentation](https://plantuml.com)
* [Kubernets Ref](https://github.com/dcasati/kubernetes-PlantUML)
