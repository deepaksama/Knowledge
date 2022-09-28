# Wireframes

## Landing Page
``` plantuml
@startsalt Dependent Discounts
skinparam dpi 130
{+
Admin
---
> Cancel Reasons
> Catalog compare
> Discount Coupons 
> Dependent Discounts
> Order Tools
"                                                         "
}
@endsalt
```

## Main Page

``` plantuml
@startsalt Dependent Discounts
skinparam dpi 130
{+
Dependent Discounts
--
 [Search Discount]  | [+ Add Discount]
> Labour Day
> BAU 
> Mother's Day 
"                                          "
}
@endsalt
```

## Add discount name
``` plantuml
@startsalt Dependent Discounts
skinparam dpi 130
{+
Add Discount Name
--
[Search Discount]  | [+ Add Discount]
v Labour Day
{+
.
Discount Name : | {+ "XYZ                "}  
    | [Ok] | [Cancel] 
.
}
> BAU 
> Mother's Day 
"                                     "
}
@endsalt
```

## View Discount

``` plantuml
@startsalt Dependent Discounts
skinparam dpi 130

{+
View Discount
--
v Mother's Day
{+
    O-1234 ( One month) | [Edit] | [Publish]
    * P-12345 (DNA) | [ Edit ]
    * P-12346 (DNA + Traits) | [Edit]
    * P-12347 | [Edit]
}
[ + Add Dependent Discount ] 
"                                                          "
}
@endsalt
```

## Add Discount
``` plantuml
@startsalt Dependent Discounts
skinparam dpi 130

{+
    Add Discount
    --
    Discount Name: {+ Mother's Day}
    Discounted Item
    {+
        OfferId: | ^  O-12345 ^
        Currency: | ^ USD ^
        Quantity: {+ " 2 "}
        Discount Amount: {+ "10"} |  [X] Enabled
    }
    Full price item
    {+
        Catalog item id: | ^ xyz ^
        Quantity: {+ "2   "} |  [X] Enabled
    }
    [ + Add full price item]
    [ Save]
    "                                                "
}
@endsalt
```

## Edit discounted item
``` plantuml
@startsalt Dependent Discounts
skinparam dpi 130

{+
    Edit discounted item
    --
    Discounted Item 
    {+
        OfferId: | ^  O-12345 ^
        Currency: | ^ USD ^
        Quantity: {+ " 2 "}
        Discount Amount: {+ "10"} |  [X] Enabled
    }
    Full price item
    {+
        Catalog item id: | ^ P-12345 ^
        Quantity: {+ "2   "} |  [X] Enabled
    }
    [ + Add full price item]
    [ Update]
    "                                                          "
}
@endsalt
```

## Edit full priced item

``` plantuml
@startsalt Dependent Discounts
skinparam dpi 130

{+
    Edit full priced item
    --
    Discounted Item 
    {+
        OfferId: |   O-12345 
        Currency: | USD
        Quantity:  2
        Discount Amount: 10 |  [X] Enabled
    }
    Full price item
    {+
        Catalog item id: | ^ P-12345 ^
        Quantity: {+ "2   "} |  [X] Enabled
    }
    [ + Add full price item]
    [ Update]
    "                                                          "
}

@endsalt
```
