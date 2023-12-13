const createBarChart = (element) => {
    let chart;
    chart = new Highcharts.Chart(element, {
        chart: {
            height: 700,
            type: "column",
        },
        title: {
            text: "Grafik Populasi Wilayah",
        },
        // subtitle: {
        //   text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>',
        // },
        // xAxis: {
        //     type: 'category',
        //     labels: {
        //         autoRotation: [-45, -90],
        //         style: {
        //             fontSize: '13px',
        //             fontFamily: 'Verdana, sans-serif'
        //         }
        //     }
        // },
        xAxis: {
            categories: [
                "WONOSARI",
                "NGLIPAR",
                "PLAYEN",
                "PATUK",
                "PALIYAN",
                "PANGGANG",
                "TEPUS",
                "SEMANU",
                "KARANGMOJO",
                "PONJONG",
                "RONGKOP",
                "SEMIN",
                "NGAWEN",
                "GEDANGSARI",
                "SAPTOSARI",
                "GIRISUBO",
                "TANJUNGSARI",
                "PURWOSARI",
            ],
            labels: {
                autoRotation: [-45, -90],
                style: {
                    fontSize: "9px",
                    lineHeight: "8px",
                },
            },
        },
        yAxis: {
            title: {
                text: "Jumlah Populasi (Jiwa)",
            },
        },
        // yAxis: {
        //     min: 0,
        //     title: {
        //         text: 'Population (millions)'
        //     }
        // },
        legend: {
            enabled: false,
        },
        tooltip: {
            pointFormat: "Populasi <b>{point.y:.1f} jiwa</b>",
        },
        series: [
            {
                name: "Populasi",
                colors: [
                    "#9b20d9",
                    "#9215ac",
                    "#861ec9",
                    "#7a17e6",
                    "#7010f9",
                    "#691af3",
                    "#6225ed",
                    "#5b30e7",
                    "#533be1",
                    "#4c46db",
                    "#4551d5",
                    "#3e5ccf",
                    "#3667c9",
                    "#2f72c3",
                    "#277dbd",
                    "#1f88b7",
                    "#1693b1",
                    "#0a9eaa",
                ],
                colorByPoint: true,
                groupPadding: 0,
                data: [
                    89542, 34490, 62098, 34805, 33332, 30899, 38115, 59835, 57995, 57302,
                    30813, 58677, 35422, 40684, 39766, 26171, 29882, 21096,
                ],
                id: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: "#FFFFFF",
                    align: "right",
                    format: "{point.y:.1f}", // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: "13px",
                        fontFamily: "Verdana, sans-serif",
                    },
                },
            },
        ],
    });
}

const createStackedChart = (element) => {
    let chart;
    chart = new Highcharts.Chart(element, {
        chart: {
            height: 700,
            type: 'column'
        },
        title: {
            text: 'KADARZI'
        },
        xAxis: {
            categories: [
                'WONOSARI [2527]', 'KEPEK [3076]', 'PIYAMAN [2154]', 'GARI [1]', 'KARANGTENGAH [2183]', 'SELANG [1371]', 'BALEHARJO [1630]', 'SIRAMAN [1356]', 'PULUTAN [1072]', 'WARENG [1068]', 'DUWET [637]', 'MULO [285]', 'WUNUNG [888]', 'KARANGREJEK [1368]', 'PILANGREJO [880]', 'KEDUNGPOH [1579]', 'PENGKOL [1488]', 'NGLIPAR [1054]', 'KATONGAN [1275]', 'BANYUSOCO [1484]', 'PLEMBUTAN [876]', 'BLEBERAN [1323]', 'GETAS [1428]', 'NGAWU [947]', 'BANDUNG [1075]', 'LOGANDENG [1714]', 'GADING [999]', 'BANARAN [1232]', 'NGLERI [759]', 'BUNDER [844]', 'BEJI [486]', 'PENGKOK [514]', 'SALAM [283]', 'PATUK [490]', 'NGORO-ORO [267]', 'NGLANGGERAN [517]', 'PUTAT [824]', 'NGLEGI [750]', 'TERBAH [550]', 'GROGOL [419]', 'KARANGDUWET [1510]', 'KARANGASEM [1249]', 'MULUSAN [755]', 'GIRING [593]', 'GIRIKARTO [827]', 'GIRIMULYO [1154]', 'GIRIHARJO [871]', 'GIRISUKO [1277]', 'GIRIPANGGUNG [416]', 'SUMBERWUNGU [1532]', 'SIDOHARJO [809]', 'TEPUS [2220]', 'PURWODADI [1124]', 'NGEPOSARI [2199]', 'PACAREJO [1627]', 'CANDIREJO [1524]', 'DADAPAYU [1484]', 'BEJIHARJO [3616]', 'WILADEG [1119]', 'BENDUNGAN [571]', 'KARANGMOJO [1705]', 'GEDANGREJO [1550]', 'NGAWIS [906]', 'JATIAYU [1800]', 'UMBULREJO [2107]', 'KENTENG [720]', 'SUMBERGIRI [1176]', 'PONJONG [1258]', 'KARANGASEM [638]', 'BEDOYO [797]', 'SIDOREJO [2559]', 'GOMBANG [1]', 'PRINGOMBO [686]', 'BOTODAYAAN [1135]', 'PETIR [849]', 'PUCANGANOM [859]', 'SEMUGIH [1312]', 'MELIKAN [708]', 'KARANGWUNI [915]', 'SUMBEREJO [1522]', 'CANDIREJO [1879]', 'KARANGSARI [1437]', 'PUNDUNGSARI [1096]', 'SEMIN [1902]', 'SAMBIREJO [1599]', 'KAMPUNG [1641]', 'BEJI [1128]', 'WATUSIGAR [1250]', 'HARGOMULYO [1908]', 'WATUGAJAH [710]', 'SERUT [1318]', 'NGALANG [2028]', 'TEGALREJO [2004]', 'NGLORO [662]', 'JETIS [1268]', 'KEPEK [1189]', 'MONGGOL [1160]', 'PLANJAN [1591]', 'BALONG [908]', 'JEPITU [1020]', 'NGLINDUR [653]', 'JERUKWUDEL [468]', 'TILENG [1060]', 'PUCUNG [753]', 'SONGBANYU [593]', 'HARGOSARI [1372]', 'KEMADANG [1720]', 'BANJAREJO [1537]', 'NGESTIREJO [1410]', 'GIRIPURWO [1268]', 'GIRICAHYO [830]', 'GIRIJATI [507]', 'GIRIASIH [248]', 'GIRITIRTO [816]',]
            , labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '9px',
                    width: '80px',
                    lineHeight: '8px',
                }
            }

        },
        yAxis: {
            min: 0,
            title: {
                text: 'Jumlah Populasi (Jiwa)'
            }
        },
        legend: {
            // layout: 'vertical',
            backgroundColor: '#fefefe',
            align: 'left',
            verticalAlign: 'top',
            x: 70,
            y: 40,
            floating: true,
            shadow: true,
            enabled: true
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: false
        },
        plotOptions: {
            column: {
                shadow: true,
                pointPadding: -0.22,
                borderWidth: 1.5,
                stacking: 'normal'
            }
        },
        series: [
            {
                name: 'KADARZI',
                data: [
                    2133, 2884, 1872, 0, 1833, 1131, 1280, 871, 604, 614, 317, 198, 414, 873, 639, 1407, 1402, 976, 1056, 898, 422, 775, 829, 783, 1067, 1569, 936, 1191, 499, 658, 361, 384, 281, 273, 202, 391, 774, 643, 437, 239, 1063, 711, 488, 420, 332, 641, 316, 348, 115, 852, 388, 496, 458, 793, 506, 619, 1480, 1061, 546, 214, 788, 993, 582, 1051, 1479, 293, 901, 990, 309, 439, 2047, 1, 631, 998, 740, 783, 1196, 686, 883, 1022, 1307, 945, 918, 1550, 1295, 1503, 910, 1002, 594, 475, 888, 825, 1243, 208, 560, 336, 278, 620, 846, 797, 516, 379, 838, 554, 569, 441, 751, 515, 523, 1081, 757, 475, 237, 700,]
            },
            {
                name: 'TIDAK KADARZI',
                data: [
                    394, 192, 282, 1, 350, 240, 350, 485, 468, 454, 320, 87, 474, 495, 241, 172, 86, 78, 219, 586, 454, 548, 599, 164, 8, 145, 63, 41, 260, 186, 125, 130, 2, 217, 65, 126, 50, 107, 113, 180, 447, 538, 267, 173, 495, 513, 555, 929, 301, 680, 421, 1724, 666, 1406, 1121, 905, 4, 2555, 573, 357, 917, 557, 324, 749, 628, 427, 275, 268, 329, 358, 512, 0, 55, 137, 109, 76, 116, 22, 32, 500, 572, 492, 178, 352, 304, 138, 218, 248, 1314, 235, 430, 1203, 761, 454, 708, 853, 882, 971, 62, 223, 137, 89, 222, 199, 24, 931, 969, 1022, 887, 187, 73, 32, 11, 116,]
            },
        ],
        // responsive: {
        //     rules: [{
        //         condition: {
        //             maxWidth: 500
        //         },
        //         chartOptions: {
        //             legend: {
        //                 enabled: false
        //             }
        //         }
        //     }]
        // }
    });
}

export {
    createBarChart,
    createStackedChart
}

