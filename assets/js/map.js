const DEFAULT_CONFIG = {
    mapTileZoomMin: 1,
    mapTileZoomMax: 5,
    mapWidthDefault: 512,
    mapHeightDefault: 512,
    mapDefaultPositionX: 0,
    mapDefaultPositionY: 0,
    mapDefaultZoom: 2,
    mapTileUrlsRoot: "./tiles/{z}/{z}-{x}-{y}.png",
    mapTileSize: 512,
    gameMapAreas: [
        {
            "createTime": "2024-01-29T11:35:29+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 785,
            "name": "风起之丘",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:59:23+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -5644.126327431023,
            "y": 4502.8559825959355
        },
        {
            "createTime": "2024-01-29T11:41:51+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 788,
            "name": "潮风群岛",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:59:28+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -6554.879861599296,
            "y": 3354.5145699489817
        },
        {
            "createTime": "2024-01-29T11:42:04+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 789,
            "name": "翠竹溪谷",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:45:39+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -5304.71507246148,
            "y": 3097.127701597078
        },
        {
            "createTime": "2024-01-29T11:42:21+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 790,
            "name": "黑曜火山",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:45:22+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -5503.5,
            "y": 1656
        },
        {
            "createTime": "2024-01-29T11:42:42+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 791,
            "name": "弦月湖畔",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:59:35+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -5081.269329606531,
            "y": 4154.959446252154
        },
        {
            "createTime": "2024-01-29T11:42:58+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 792,
            "name": "寒风凛冽之岛",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:59:44+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -3915.9573542111,
            "y": 2825.5986976214444
        },
        {
            "createTime": "2024-01-29T11:43:14+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 793,
            "name": "忘却之岛",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:59:49+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -4055.5,
            "y": 2197
        },
        {
            "createTime": "2024-01-29T11:43:37+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 794,
            "name": "湿地之岛",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T12:00:40+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -5319.564314866398,
            "y": 5538.06031025304
        },
        {
            "createTime": "2024-01-29T11:43:48+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 795,
            "name": "东部的荒芜岛屿",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T12:00:47+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -4533.261574186957,
            "y": 6008.993426523281
        },
        {
            "createTime": "2024-01-29T11:44:02+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 796,
            "name": "新绿清流",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:45:35+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -4402.446819667445,
            "y": 4961.061176804818
        },
        {
            "createTime": "2024-01-29T11:44:13+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 797,
            "name": "霜冻雪山",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:59:56+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -3746.2517267263293,
            "y": 4898.835780060402
        },
        {
            "createTime": "2024-01-29T11:44:31+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 798,
            "name": "荒漠沙丘",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:45:12+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -2457.196064623253,
            "y": 5887.371060159196
        },
        {
            "createTime": "2024-01-29T11:44:48+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 799,
            "name": "白银灵峰",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T11:45:05+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -1887.975105768082,
            "y": 3419.568393818144
        },
        {
            "createTime": "2024-01-29T11:46:08+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 800,
            "name": "第一禁猎区",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T12:00:20+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -6903.483504724264,
            "y": 4467.500643536608
        },
        {
            "createTime": "2024-01-29T11:46:25+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 801,
            "name": "第二禁猎区",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T12:00:14+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -4380.5,
            "y": 1307
        },
        {
            "createTime": "2024-01-29T11:46:40+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 802,
            "name": "第三禁猎区",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T12:00:06+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "3,4,5,2",
            "x": -1307.5,
            "y": 6822
        },
        {
            "createTime": "2024-01-29T11:47:50+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 803,
            "name": "边远渔村",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:47:50+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -7149.5,
            "y": 2141
        },
        {
            "createTime": "2024-01-29T11:48:21+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 804,
            "name": "灼热坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:14:00+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -6226.5,
            "y": 2318
        },
        {
            "createTime": "2024-01-29T11:48:42+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 805,
            "name": "永炎同心会的高塔",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:48:42+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -6204.5,
            "y": 1655
        },
        {
            "createTime": "2024-01-29T11:49:09+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 806,
            "name": "神秘密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:49:09+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -6794.5,
            "y": 3505
        },
        {
            "createTime": "2024-01-29T11:49:30+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 807,
            "name": "剑豪密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T12:13:34+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -6123.5,
            "y": 3625
        },
        {
            "createTime": "2024-01-29T11:49:57+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 808,
            "name": "水涟坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:18:34+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5860.5,
            "y": 3076
        },
        {
            "createTime": "2024-01-29T11:50:18+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 809,
            "name": "雷鸣龙密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:16:04+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5487.855728788796,
            "y": 3269.661756206596
        },
        {
            "createTime": "2024-01-29T11:50:45+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 810,
            "name": "暗夜密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:50:45+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -4329.5,
            "y": 2412
        },
        {
            "createTime": "2024-01-29T11:51:05+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 811,
            "name": "忘却之岛的教堂遗址",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:51:05+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -4162.5,
            "y": 2232
        },
        {
            "createTime": "2024-01-29T11:51:51+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 812,
            "name": "湿地之岛的教堂遗址",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:51:51+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5225,
            "y": 5720
        },
        {
            "createTime": "2024-01-29T11:52:04+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 813,
            "name": "魔导士密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-31T17:45:37+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5435.529826980991,
            "y": 5096.825678792635
        },
        {
            "createTime": "2024-01-29T11:52:18+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 814,
            "name": "冰鸟密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:13:48+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5526.5,
            "y": 4566
        },
        {
            "createTime": "2024-01-29T11:52:39+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 815,
            "name": "刚毅密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:56:20+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5027.5,
            "y": 4764
        },
        {
            "createTime": "2024-01-29T11:53:03+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 816,
            "name": "神速密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:14:43+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -4031.215759544508,
            "y": 5270.773946964526
        },
        {
            "createTime": "2024-01-29T11:53:14+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 817,
            "name": "纯白密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:14:37+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -3793.6278810658278,
            "y": 5139.2520856638275
        },
        {
            "createTime": "2024-01-29T11:53:36+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 818,
            "name": "帕鲁保护团体的高塔",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:14:56+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -3967.5761492377187,
            "y": 4835.196169753613
        },
        {
            "createTime": "2024-01-29T11:53:51+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 819,
            "name": "自卫队的高塔",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:53:51+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -2738.5009214818583,
            "y": 6376.996602035647
        },
        {
            "createTime": "2024-01-29T11:54:04+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 820,
            "name": "秘密坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:54:04+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -2691.5009214818583,
            "y": 6176.996602035647
        },
        {
            "createTime": "2024-01-29T11:54:19+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 821,
            "name": "沙漠之镇",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:54:19+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -2611.5009214818583,
            "y": 5519.996602035647
        },
        {
            "createTime": "2024-01-29T11:54:41+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 822,
            "name": "小型聚落",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:13:27+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -6039.399018114303,
            "y": 4410.932101041684
        },
        {
            "createTime": "2024-01-29T11:55:04+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 823,
            "name": "翼龙密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T11:55:04+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -4663,
            "y": 3048
        },
        {
            "createTime": "2024-01-29T11:55:20+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 824,
            "name": "守护者密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:14:51+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -4273.046278710307,
            "y": 4630.135203209514
        },
        {
            "createTime": "2024-01-29T11:56:03+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 825,
            "name": "精灵密域",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:13:39+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5162.586609442984,
            "y": 4017.780730701964
        },
        {
            "createTime": "2024-01-29T12:02:49+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 826,
            "name": "忘却坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T12:02:49+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -2163.5,
            "y": 3034
        },
        {
            "createTime": "2024-01-29T12:12:01+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 827,
            "name": "枯渴坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T12:12:01+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -3763,
            "y": 6126
        },
        {
            "createTime": "2024-01-29T12:12:23+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 828,
            "name": "雷恩盗猎集团的高塔",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T12:12:23+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5883.5,
            "y": 4553
        },
        {
            "createTime": "2024-01-29T12:13:18+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 829,
            "name": "潮风群岛的教堂",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T12:13:18+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -6346.5,
            "y": 3790
        },
        {
            "createTime": "2024-01-29T12:16:14+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 830,
            "name": "浅水的矿道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T12:16:14+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5903.5,
            "y": 3517
        },
        {
            "createTime": "2024-01-29T12:17:06+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 831,
            "name": "破灭坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:14:07+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5783.5,
            "y": 1724
        },
        {
            "createTime": "2024-01-29T13:07:10+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 832,
            "name": "基因研究部队的高塔",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:15:04+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -2232.3361082059305,
            "y": 3478.9653634378146
        },
        {
            "createTime": "2024-01-29T13:08:17+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 833,
            "name": "冰山坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T13:08:17+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -2597.5,
            "y": 3407
        },
        {
            "createTime": "2024-01-29T13:12:02+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 834,
            "name": "日暮沙地",
            "nameFontSize": 22,
            "updateTime": "2024-01-29T13:12:02+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,2,3,5",
            "x": -4373,
            "y": 3516
        },
        {
            "createTime": "2024-01-29T13:13:50+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 835,
            "name": "信徒坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T13:13:50+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -4866.5,
            "y": 4236
        },
        {
            "createTime": "2024-01-29T16:01:12+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 836,
            "name": "边境坑道",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:01:12+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -1791.5,
            "y": 5551
        },
        {
            "createTime": "2024-01-29T16:15:50+08:00",
            "createUserId": 8204994,
            "gameMapId": 26,
            "id": 837,
            "name": "破败教会",
            "nameFontSize": 16,
            "updateTime": "2024-01-29T16:15:50+08:00",
            "updateUserId": 8204994,
            "visibleMapZoom": "4,5",
            "x": -5760.798946326803,
            "y": 4350.120917859641
        }
    ],
    landmarkNameBackgroundColor: "#271E00",
    landmarkNameBorderColor: "#684F00",
    landmarkNameColor: "#BFA95E",
    mapAreaNameColor: "#88D9E7",
    mapAreaNameStrokeColor: "#296C77"
}

function PalMap(container, opt) {
    this.config = opt;
    this.map = null;
    this.feature = null;
    this.container = container;
    this.p = [];
    this.k = [];
}


PalMap.prototype.initMap = function () {
    const b = this.config;
    var tn = Math.pow(2, b.mapTileZoomMax);
    var kn = [0, -8192, 8192, 0];
    var crs = L.CRS.Simple;
    crs.transformation = new L.Transformation(1, -kn[0], -1, kn[3]);
    crs.scale = function (He) {
        return Math.pow(2, He) / tn
    }
    crs.zoom = function (He) {
        return Math.log(He * tn) / Math.LN2
    }

    var map = L.map(this.container, {
        renderer: L.canvas(),
        crs: crs,
        attributionControl: false,
        zoomControl: false,
        zoomSnap: .5,
        inertia: true,
        maxBoundsViscosity: true,
        preferCanvas: true,
        keyboard: false
    });


    const He = map.unproject([0, b.mapWidthDefault], b.mapTileZoomMin);
    const Yn = map.unproject([b.mapHeightDefault, 0], b.mapTileZoomMin);
    const bounds = L.latLngBounds(He, Yn);
    map.setMaxBounds(bounds);

    let center = bounds.getCenter();
    let posX = b.mapDefaultPositionX;
    if (posX == null || posX === 0) {
        posX = center.lat;
    }
    let posY = b.mapDefaultPositionY;
    if (posY == null || posY === 0) {
        posY = center.lng;
    }
    let zoom = b.mapDefaultZoom;
    if (zoom == null || zoom <= 0) {
        zoom = b.mapTileZoomMin
    }
    map.setView([posX, posY], zoom);


    L.tileLayer(b.mapTileUrlsRoot, {
        minZoom: b.mapTileZoomMin || 1,
        maxZoom: b.mapTileZoomMax || 7,
        bounds: bounds,
        noWrap: false,
        updateWhenIdle: false,
        edgeBufferTiles: 1,
        tileSize: b.mapTileSize
    }).addTo(map);

    this.k = this.config.gameMapAreas;
    map.getPane("tooltipPane").style.zIndex = 300;

    this.map = map;

    this.showMapAreaLabel();
    this.landmarks();
    this.initEvents();
}


PalMap.prototype.showMapAreaLabel = function (areas) {
    const b = this.config;
    const mapAreas = areas || this.k;
    if (!this.map.getPane("mapLabelPane")) {
        var l = this.map.createPane("mapLabelPane");
        l.style.zIndex = 250;
    }
    if (this.feature == null) {
        this.feature = L.featureGroup();
        this.feature.addTo(this.map);
    }

    if (mapAreas && mapAreas.length > 0) {
        const zval = parseInt(this.map.getZoom());
        mapAreas.forEach(area => {
            if (area.visibleMapZoom.indexOf(zval) > -1) {
                const icon = L.divIcon({
                    className: "label-icon",
                    html: `<div style="font-size: ${area.nameFontSize}px;color: ${b.mapAreaNameColor || "#ffffff"};text-shadow: -1px -1px 0 ${b.mapAreaNameStrokeColor || "#ffffff"},1px -1px 0 ${b.mapAreaNameStrokeColor || "#ffffff"},-1px 1px 0 ${b.mapAreaNameStrokeColor || "#ffffff"},1px 1px 0 ${b.mapAreaNameStrokeColor || "#ffffff"};">${area.name}</div>`,
                    iconSize: [area.nameFontSize * area.name.length, 24],
                    iconAnchor: [area.nameFontSize * (area.name.length / 2), 12]
                });
                var marker = L.marker([area.x, area.y], {
                    icon: icon,
                    pane: "mapLabelPane",
                    interactive: false,
                    id: area.id,
                    name: area.name,
                    nameFontSize: area.nameFontSize,
                    visibleMapZoom: area.visibleMapZoom,
                    x: area.x,
                    y: area.y
                });
                marker.addTo(this.feature);
            }
        });
    }

}

PalMap.prototype.landmarks = function () {
    if (this.m == null) {
        this.m = L.featureGroup();
        this.m.addTo(this.map)
    }
    if (this.p.length > 0) {
        this.m.clearLayers();
        this.p = []
    }
    LANDMARKS.forEach(mark => {
        let Le = mark.x
            , Oe = mark.y;
        const tn = this.map.getContainer().getBoundingClientRect()
            , kn = this.map.latLngToContainerPoint(L.latLng(Le, Oe));
        if (kn.x >= tn.left && kn.x <= tn.right && kn.y >= tn.top && kn.y <= tn.bottom) {
            let yn = !1;
            const vt = L.icon({
                className: "marker-icon",
                iconUrl: mark.iconSelectedUrl,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            var _t = L.marker([Le, Oe], {
                icon: vt,
                id: mark.id,
                name: mark.name,
                landmarkCatalogId: mark.landmarkCatalogId,
                landmarkCatalogName: mark.category,
                iconUrl: mark.iconUrl,
                iconSelectedUrl: mark.iconSelectedUrl,
                fullName: mark.fullName,
                landmarkCatalogType: mark.landmarkCatalogType,
                isPositionChanged: yn,
                opacity: yn ? .5 : 1
            }).addTo(this.m);
            // if(i.makerNameSwitch && i.getShowLandmarkNameToMarker(mark) ) {
            // L.tooltip([Le, Oe], {
            //     content: `<span style="background-color: ${this.config.landmarkNameBackgroundColor || "#271e00"};color: ${this.config.landmarkNameColor || "#BFA95E"};border-color:${this.config.landmarkNameBorderColor || "#684F00"};">${mark.name}</span>`,
            //     direction: "top",
            //     permanent: !0,
            //     className: "mapTooltip"
            // }).openOn(this.m)
            // }
            this.p.push(_t);
        }
    });
    this.ye();
}


PalMap.prototype.ye = function () {
    const self = this;
    const b = H => {
        const F = H.target;
        console.log(F);
        self.p.forEach(tn => {
            const kn = L.icon({
                className: "marker-icon",
                iconUrl: tn.options.iconSelectedUrl,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            tn.setIcon(kn)
        });
        const Le = L.divIcon({
            className: "marker-icon-select",
            html: "<img src=" + F.options.iconSelectedUrl + " />",
            iconSize: [32, 32],
            iconAnchor: [16, 40]
        });
        F.setIcon(Le);
        F.setOpacity(1);
    }
    self.p.length > 0 && self.p.forEach(H => {
        H.off("click", b);
        H.on("click", b)
    })
}

PalMap.prototype.initEvents = function () {

    const self = this;
    self.map.on("click", (b) => {
        debugger
        console.log("点击地图");
        self.me();
    });
    self.map.on("move", b => {
    });
    self.map.on("moveend", b => {
        self.landmarks()
    });
    self.map.on("zoomend", b => {
        self.landmarks();
        const H = parseInt(self.map.getZoom());
        self.feature.clearLayers();
        let F = [];
        self.k.forEach(Le => {
            Le.visibleMapZoom.indexOf(H) > -1 && F.push(Le)
        });
        F.length > 0 && self.showMapAreaLabel(F)
    })
}

PalMap.prototype.me = function () {
    const self = this;
    self.p.forEach(b => {
        const H = L.icon({
            className: "marker-icon",
            iconUrl: b.options.iconSelectedUrl,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
        b.setIcon(H);
        b.options.isPositionChanged && b.setOpacity(.5)
    })
}
