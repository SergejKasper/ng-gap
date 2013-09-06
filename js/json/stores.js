{
  "type": "ColumnChart",
  "displayed": true,
  "cssStyle": "height:600px; width:100%;",
  "data": {
    "cols": [
      {
        "id": "store",
        "label": "Store",
        "type": "string"
      },
      {
        "id": "anzahl",
        "label": "Anzahl",
        "type": "number"
      }
    ],
    "rows": [
      {
        "c": [
          {
            "v": "Apple App Store"
          },
          {
            "v": 900000,
            "f": "900000"
          }
        ]
      },
       {
        "c": [
          {
            "v": "Google Play"
          },
          {
            "v": 850000,
            "f": "850000"
          }
        ]
      },      
      {
        "c": [
          {
            "v": "Windows Phone Store"
          },
          {
            "v": 145000,
            "f": "145000"
          }
        ]
      },
      {
        "c": [
          {
            "v": "Blackbarry World"
          },
          {
            "v": 120000,
            "f": "120000"
          }
        ]
      }
    ]
  },
  "options": {
    "title": "Anzahl angebotener Apps in den Top App-Stores im Juni 2013",
    "isStacked": "true",
    "fill": 20,
    "displayExactValues": true,
    "colors":["#D20065","#E20055","#D20065","#E20055"],
    "backgroundColor":{
    	"fill" : "cdcecf",
    	"stroke" : "#D20065"
    },
    "fontSize": 20,
    "fontName": "Montserrat",
    "vAxis": {
      "title": "Sales unit",
      "gridlines": {
        "count": 10
      }
    },
    "hAxis": {
      "title": "App-Stores"
    }
  }
}