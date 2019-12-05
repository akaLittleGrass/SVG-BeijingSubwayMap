const vision = d3.select('#vision');

/*
   array items explain: [xCoord, yCoord, text, testOffsetX, textOffsetY]
*/

const line1 =   [ 
    [ 600, 880, '苹果园', 35, 0 ],
    [ 620, 930, '古城', 0, 25 ],
    [ 670, 930, '八角游乐园', 0, -15 ],
    [ 720, 930, '八宝山', 0, 25 ],
    [ 775, 930, '玉泉路', 0, 25 ],
    [ 830, 930, '五棵松', 0, 25 ],
    [ 890, 930, '万寿路', 0, 25 ],
    [ 952, 930, '公主坟', 33, 25 ],
    [ 1020, 930, '军事博物馆', 45, -15 ],
    [ 1095, 930, '木樨地', 0, 25 ],
    [ 1165, 930, '南礼士路', 0, 25 ],
    [ 1215, 930, '', 0, 25 ],
    [ 1300, 930, '西单', -25, 23 ],
    [ 1355, 930, '天安门西', 0, 25 ],
    [ 1405, 930, '天安门东', 0, -15 ],
    [ 1460, 930, '王府井', 0, 25 ],
    [ 1525, 930, '东单', 25, 25 ],
    [ 1595, 930, '', 0, 25 ],
    [ 1690, 930, '永安里', 0, 25 ],
    [ 1730, 930, '国贸', 25, -10 ],
    [ 1790, 930, '大望路', -28, 25 ],
    [ 1840, 930, '四惠', 0, -15 ],
    [ 1890, 930, '四惠东', 0, -15 ] 
];
const line1Points = line1;
const line2 = [  
    [ 1375, 750 ],
    [ 1445, 750 ],
    [ 1505, 751 ],
    [ 1555, 754 ],
    [ 1585, 765 ],
    [ 1595, 790 ],
    [ 1596, 825 ],
    [ 1596, 872 ],
    [ 1596, 890 ],
    [ 1595, 930 ],
    [ 1585, 970 ],
    [ 1555, 991 ],
    [ 1505, 994 ],
    [ 1435, 994 ],
    [ 1360, 994 ],
    [ 1290, 994 ],
    [ 1259, 990 ],
    [ 1230, 979 ],
    [ 1218, 955 ],
    [ 1215, 930 ],
    [ 1215, 880 ],
    [ 1215, 835 ],
    [ 1216, 795 ],
    [ 1226, 770 ],
    [ 1255, 755 ],
    [ 1295, 750 ],
    [ 1375, 750 ]
];

const line2Points  = [ 
    [ 1375, 750, '鼓楼大街', 38, 21 ],
    [ 1445, 750, '安定门', 0, -14 ],
    [ 1525, 751, '雍和宫', 34, -10 ],
    [ 1595, 790, '东直门', -32, 15 ],
    [ 1596, 825, '东四十条', 40, 5 ],
    [ 1596, 872, '朝阳门', 32, 22 ],
    [ 1595, 930, '建国门', 32, -10 ],
    [ 1585, 970, '北京站', 35, 5 ],
    [ 1525, 994, '崇文门', 30, 20 ],
    [ 1435, 994, '前门', 0, 25 ],
    [ 1360, 994, '和平门', 0, 25 ],
    [ 1300, 994, '宣武门', -30, 25 ],
    [ 1230, 979, '长椿街', -35, 5 ],
    [ 1215, 930, '复兴门', -35, -15 ],
    [ 1215, 880, '阜成门', -35, 5 ],
    [ 1215, 835, '车公庄', -35, 25 ],
    [ 1216, 795, '西直门', -35, 20 ],
    [ 1295, 750, '积水潭', 0, -14 ]
];

const lineBatong = [
    [ 1840, 937.5, '', 0, -15 ],
    [ 1890, 937.5, '', 0, -15 ],
    [ 1950, 937.5, '高碑店', 0, -15 ],
    [ 2000, 937.5, '传媒大学', 0, 25 ],
    [ 2045, 937.5, '双桥', 0, -15 ],
    [ 2085, 937.5, '管庄', 0, -15 ],
    [ 2150, 937.5, '八里桥', 0, -15 ],
    [ 2170, 990, '通州北苑', -45, 5 ],
    [ 2190, 1042.5, '果园', -30, 5 ],
    [ 2210, 1095, '九棵树', -35, 5 ],
    [ 2230, 1147.5, '梨园', -35, 5 ],
    [ 2250, 1200, '临河里', -35, 5 ],
    [ 2270, 1252.5, '土桥', -30, 5 ]
];     
const lineBatongPoints = lineBatong.slice(2);  

const line4 = [
    [ 755, 475, '安河桥北', 0, 25 ],
    [ 835, 475, '北宫门', 0, 25 ],
    [ 915, 475, '西苑', 0, 25 ],
    [ 987, 476, '', -35, 5 ],
    [ 1005, 480, '', -35, 5 ],
    [ 1010, 490, '圆明园', -35, 10 ],
    [ 1010, 540, '北京大学东门', -60, 5 ],
    [ 1010, 590, '中关村', -35, 5 ],
    [ 1010, 640, '海淀黄庄', 40, -15 ],
    [ 1010, 690, '人民大学', 40, 5 ],
    [ 1010, 730, '魏公村', 35, 5 ],
    [ 1010, 785, '', 35, 5 ],
    [ 1015, 793, '', 35, 5 ],
    [ 1020, 795, '', -60, 5 ],
    [ 1100, 795, '动物园', 0, -15 ],
    [ 1216, 795, '', -35, 5 ],
    [ 1280, 795, '新街口', -20, 20 ],
    [ 1294, 798, '', -35, 5 ],
    [ 1299, 805, '', -35, 5 ],
    [ 1300, 835, '', 325, 5 ],
    [ 1300, 870, '西四', -25, 5 ],
    [ 1300, 900, '灵境胡同', -40, 5 ],
    [ 1300, 930, '', 0, 25 ],
    [ 1300, 994, '', 0, 25 ],
    [ 1300, 1050, '', 5, 25 ],
    [ 1300, 1110, '陶然亭',35, 5 ],
    [ 1300, 1168, '北京南站', 40, -15 ],
    [ 1300, 1218, '马家堡', 30, -10 ],
    [ 1300, 1266, '', -35, -15 ],
    [ 1300, 1306, '公益西桥', -40, 3 ],
    [ 1300, 1335, '新宫', -25, 3 ],
    [ 1300, 1375, '西红门', -35, 3 ],
    [ 1300, 1425, '高米店北', -45, 3 ],
    [ 1300, 1465, '高米店南', -45, 3 ],
    [ 1300, 1495, '枣园', -25, 3 ],
    [ 1300, 1530, '清源路', -35, 3 ],
    [ 1300, 1570, '黄村西大街', -50, 3 ],
    [ 1300, 1615, '黄村火车站', -50, 3 ],
    [ 1300, 1660, '义和庄', -35, 3 ],
    [ 1300, 1700, '生物医药基地', -60, 3 ],
    [ 1300, 1735, '天宫院', -35, 3 ],
];
const line4Points = line4.slice();
line4Points.splice(3,1);
line4Points.splice(3,1);
line4Points.splice(9,1);
line4Points.splice(9,1);
line4Points.splice(13,1);
line4Points.splice(13,1);


const line5 = [ 
    [ 1525, 285, '天通苑北', 42, 5 ],
    [ 1525, 310, '天通苑', 35, 5 ],
    [ 1525, 355, '天通苑南', 42, 5 ],
    [ 1525, 400, '立水桥', 35, -10 ],
    [ 1525, 480, '立水桥南', 42, 5 ],
    [ 1525, 520, '北苑路北', 42, 5 ],
    [ 1525, 560, '大屯路东', 42, -10 ],
    [ 1525, 600, '惠新西街北口', 56, 5 ],
    [ 1525, 640, '惠新西街南口', 56, -15 ],
    [ 1525, 685, '和平西桥', 42, 5 ],
    [ 1525, 710, '和平里北街', 50, 5 ],
    [ 1525, 751, '', 0, -14 ],
    [ 1525, 785, '北新桥', 35, -3 ],
    [ 1525, 830, '张自忠路', -40, 5 ],
    [ 1525, 872, '东四', 26, -10 ],
    [ 1525, 905, '灯市口', 35, 5 ],
    [ 1525, 930, '', 35, 5 ],
    [ 1525, 994, '', 35, 5 ],
    [ 1525, 1050, '', 35, 5 ],
    [ 1525, 1106, '天坛东门', 40, 5 ],
    [ 1525, 1168, '蒲黄榆', 35, -10 ],
    [ 1525, 1212, '刘家窑', 35, 5 ],
    [ 1525, 1266, '宋家庄', 32, 20 ]
];                 
const line5Points = line5;

const lineYizhuang = [
    [ 1525, 1266, '宋家庄', 32, 20 ],
    [ 1525, 1306, '肖村', 30, 5 ],
    [ 1545, 1336, '小红门', 35, 5 ],
    [ 1565, 1366, '旧宫', 30, 5 ],
    [ 1585, 1396, '亦庄桥', 35, 5 ],
    [ 1605, 1426, '亦庄文化园', 50, 5 ],
    [ 1625, 1456, '万源街', 35, 5 ],
    [ 1645, 1486, '荣京东街', 45, 3 ],
    [ 1665, 1516, '荣昌东街', -45, 5 ],
    [ 1685, 1546, '', 32, 20 ],
    [ 1730, 1546, '同济南路', 0, 25 ],
    [ 1800, 1546, '经海路', 0, 25 ],
    [ 1870, 1546, '次渠南', 0, 25 ],
    [ 1940, 1546, '次渠', 0, 25 ],
    [ 2010, 1546, '亦庄火车站', 0, 25 ],
];
const lineYizhuangPoints = lineYizhuang.slice();
lineYizhuangPoints.splice(9, 1);

const line6 = [ 
    [ 520, 880, '金安桥', 0, -15 ],
    [ 600, 880, '', 35, 0 ],
    [ 600, 857, '杨庄', -25, 5 ],
    [ 600, 835, '西黄村', 0, -15 ],
    [ 660, 835, '廖公庄', 0, 25 ],
    [ 735, 835, '田村', 0, 25 ],
    [ 800, 835, '海淀五路居', 3, 25 ],
    [ 873, 835, '', 0, 25 ],
    [ 940, 835, '花园桥', -5, 25 ],
    [ 1020, 835, '白石桥南', 40, -10 ],
    [ 1125, 835, '车公庄西', -15, 25 ],
    [ 1215, 835, '', -35, 5 ],
    [ 1300, 835, '平安里', 30, 25 ],
    [ 1340, 835, '北海北', 0, -15 ],
    [ 1375, 835, '南锣鼓巷', 40, -15 ],
    [ 1445, 872, '', 26, 5 ],
    [ 1525, 872, '', 26, 5 ],
    [ 1596, 872, '', 35, 5 ],
    [ 1666, 872, '东大桥', 0, -15 ],
    [ 1730, 872, '', 0, -15 ],
    [ 1790, 872, '金台路', 30, -15 ],
    [ 1870, 872, '十里堡', 0, -15 ],
    [ 1930, 872, '青年路', 0, -15 ],
    [ 1990, 872, '褡裢坡', 0, -15 ],
    [ 2050, 872, '黄渠', 0, -15 ],
    [ 2110, 872, '常营', 0, -15 ],
    [ 2180, 872, '草房', 0, -15 ],
    [ 2260, 872, '物资学院路', 0, -15 ],
    [ 2340, 872, '通州北关', 0, -15 ],
    [ 2420, 1010, '北运河西', -43, 4 ],
    [ 2460, 1010, '北运河东', 0, -15 ],
    [ 2510, 1010, '郝家村', 0, 25 ],
    [ 2590, 1010, '东夏园', 0, 25 ],
    [ 2670, 1010, '潞城', 0, 25 ]
];
                
const line6Points = line6.slice();
line6Points.splice(15, 1);

const line7 = [
    [ 1020, 980, '', 40, 5 ],
    [ 1085, 1050, '湾子', 0, 25 ],
    [ 1165, 1050, '达官营', 0, 25 ],
    [ 1235, 1050, '广安门内', -3, 25 ],
    [ 1300, 1050, '菜市口', 30, -10 ],
    [ 1350, 1050, '虎坊桥', 0, 30 ],
    [ 1410, 1050, '珠市口', 10, -13 ],
    [ 1470, 1050, '桥湾', 0, 25 ],
    [ 1525, 1050, '磁器口', 35, -10 ],
    [ 1595, 1050, '广渠门内', 0, 25 ],
    [ 1665, 1050, '广渠门外', 0, 25 ],
    [ 1730, 1050, '', 0, 25 ],
    [ 1795, 1050, '九龙山', -30, 25 ],
    [ 1865, 1050, '大郊亭', 0, 25 ],
    [ 1935, 1050, '百子湾', 35, 5 ],
    [ 1935, 1120, '化工', 25, 5 ],
    [ 1935, 1190, '南楼梓庄', 40, 5 ],
    [ 1935, 1205, '', 45, 5 ],
    [ 1985, 1255, '欢乐谷景区', 50, 0 ],
    [ 2035, 1305, '垡头', 25, 0 ],
    [ 2085, 1355, '双合', 25, 0 ],
    [ 2135, 1405, '焦化厂', 35, 0 ],
];
const line7Points = line7.slice();
line7Points.splice(17,1);

const line8North = [ 
    [ 1190, 320, '朱辛庄', -35, 5 ],
    [ 1260, 320, '育知路', 0, 25 ],
    [ 1325, 320, '平西府', 0, 25 ],
    [ 1375, 320, '', 35, 5 ],
    [ 1375, 350, '回龙观东大街', 60, 5 ],
    [ 1375, 400, '霍营', 27, -15 ],
    [ 1375, 440, '育新', 27, 5 ],
    [ 1375, 465, '西小口', 35, 5 ],
    [ 1375, 490, '永泰庄', 35, 5 ],
    [ 1375, 520, '林萃桥', 35, 5 ],
    [ 1375, 550, '森林公园南门', -60, -5 ],
    [ 1375, 580, '奥林匹克公园', 60, 20 ],
    [ 1375, 610, '奥体中心', 42, 13 ],
    [ 1375, 640, '北土城', -33, -15 ],
    [ 1375, 680, '安华桥', -33, 5 ],
    [ 1375, 720, '安德里北街', -45, -10 ],
    [ 1375, 750, '', 0, -14 ],
    [ 1375, 790, '什刹海', -35, 0 ],
    [ 1375, 835, '', 40, -15 ],
    [ 1415, 885, '中国美术馆', 50, 7 ]
];
const line8NorthPoints = line8North.slice();
line8NorthPoints.splice(3, 1);   

const line8South = [
    [ 1410, 1050, '珠市口', 10, -13 ],
    [ 1410, 1100, '天桥', 25, 0 ],
    [ 1410, 1168, '永定门外', 37, -15 ],
    [ 1410, 1200, '木樨园', 32, 0 ],
    [ 1410, 1236, '海户屯', 32, 0 ],
    [ 1410, 1266, '大红门', 30, 25 ],
    [ 1410, 1316, '大红门南', 45, 5 ],
    [ 1410, 1366, '和义', 30, 0 ],
    [ 1410, 1436, '东高地', 35, 5 ],
    [ 1410, 1506, '火箭万源', 43, 5 ],
    [ 1411, 1520, '', 43, 5 ],
    [ 1415, 1532, '', 43, 5 ],
    [ 1425, 1540, '', 43, 5 ],
    [ 1435, 1543, '', 43, 5 ],
    [ 1450, 1544, '五福堂', 0, 25 ],
    [ 1465, 1545, '', 0, 25 ],
    [ 1475, 1547, '', 0, 25 ],
    [ 1485, 1553, '', 0, 25 ],
    [ 1489, 1562, '', 0, 25 ],
    [ 1490, 1580, '', 0, 25 ],
    [ 1490, 1630, '德茂', 25, 5 ],
    [ 1490, 1680, '瀛海', 25, 5 ],
];
line8SouthPoints = line8South.slice();
line8SouthPoints.splice(10, 4);
line8SouthPoints.splice(11, 5);

const line9 = [ 
    [ 1020, 795, '国家图书馆', -60, 5 ],
    [ 1020, 835, '', -15, 25 ],
    [ 1020, 887, '白堆子', 30, 5 ],
    [ 1020, 930, '', 0, -15 ],
    [ 1020, 980, '北京西站', 40, 0 ],
    [ 990, 1060, '六里桥东', 40, 15 ],
    [ 955, 1100, '', 20, -15 ],
    [ 920, 1168, '七里庄', -25, -15 ],
    [ 920, 1220, '丰台东大街', -50, 5 ],
    [ 920, 1260, '丰台南路', -40, 5 ],
    [ 920, 1300, '科怡路', -35, 5 ],
    [ 920, 1350, '丰台科技园', -50, 5 ],
    [ 920, 1400, '郭公庄', -35, 5 ],
];

const lineFangshan = [
    [ 920, 1400, '郭公庄', -35, 5 ],
    [ 905, 1440, '大葆台', -35, 5 ],
    [ 890, 1480, '稻田', -30, 5 ],
    [ 875, 1520, '长阳', -30, 5 ],
    [ 860, 1560, '篱笆房', -35, 5 ],
    [ 845, 1600, '广阳城', -35, 5 ],
    [ 830, 1640, '良乡大学城北', -60, 5 ],
    [ 815, 1680, '', -35, 5 ],
    [ 798, 1705, '', -35, 5 ],
    [ 775, 1718, '', -35, 5 ],
    [ 755, 1720, '良乡大学城', 35, 25 ],
    [ 700, 1720, '良乡大学城西', -10, 25 ],
    [ 645, 1720, '良乡南关', 0, -15 ],
    [ 600, 1720, '苏庄', 5, 25 ],
    [ 540, 1720, '闫村东', -5, 25 ],
];
const lineFangshanPoints = lineFangshan.slice();
lineFangshanPoints.splice(7, 3);

const lineYanfangLine = [
    [ 540, 1720, '闫村东', -5, 25 ],
    [ 490, 1720, '紫草坞', 0, -15 ],
    [ 460, 1770, '闫村', 20, 20 ],
    [ 410, 1770, '星城', -5, -15 ],
    [ 360, 1770, '大石河东', 0, 25 ],
    [ 310, 1770, '马各庄', 0, -15 ],
    [ 260, 1770, '饶乐府', 0, 25 ],
    [ 210, 1770, '', 0, 25 ],
    [ 170, 1700, '房山城关', -30, 25 ],
    [ 130, 1630, '燕山', -20, 20 ],
];
const lineYanfangLinePoints = lineYanfangLine.slice();
lineYanfangLinePoints.splice(7, 1);

const line10 = [
    [ 1730, 1050, '',300,0 ],
    [ 1730, 1116, '劲松', 28, 5 ],
    [ 1730, 1166, '潘家园', 35, 5 ],
    [ 1726, 1236, '十里河', 35, -15 ],
    [ 1700, 1260, '', 0, -15 ],
    [ 1660, 1266, '分钟寺', 0, -15 ],
    [ 1590, 1266, '成寿寺', 0, -15 ],
    [ 1525, 1266, '', 0, -15 ],
    [ 1470, 1266, '石榴庄', 0, -13 ],
    [ 1410, 1266, '大红门', 30, 25 ],
    [ 1360, 1266, '角门东', 0, -15 ],
    [ 1300, 1266, '角门西', -35, -15 ],
    [ 1210, 1266, '草桥', 0, -15 ],
    [ 1140, 1266, '纪家庙', 0, -15 ],
    [ 1080, 1266, '首经贸', 0, -15 ], 
    [ 1030, 1262, '丰台站', 0, -15 ],
    [ 980, 1250, '', 30, 5 ],
    [ 958, 1210, '泥洼', 30, 5 ],
    [ 955, 1168, '西局', 30, 5 ],
    [ 955, 1100, '六里桥', -30, -10 ],
    [ 955, 990, '莲花桥', -35, 5 ],
    [ 952, 930, '', 0, 25 ],
    [ 911, 885, '西钓鱼台', -20, 25 ],   
    [ 873, 835, '慈寿寺', -35, -10 ],
    [ 870, 785, '长春桥', -35, 5 ],
    [ 870, 740, '车道沟', -35, 5 ],
    [ 872, 700, '火器营', -35, 5 ],
    [ 881, 660, '', 0, 25 ],
    [ 910, 643, '巴沟', 0, 25 ],
    [ 960, 640, '苏州街', 0, 25 ],
    [ 1010, 640, '海淀黄庄', 40, -15 ],
    [ 1090, 640, '知春里', -5, 25 ],
    [ 1190, 640, '知春路', -35, -15 ],
    [ 1240, 640, '西土城', -5, 25 ],
    [ 1290, 640, '牡丹园', -2, 25 ],
    [ 1340, 640, '健德门', 0, 25 ],
    [ 1375, 640, '北土城', -33, -15 ],
    [ 1590, 640, '安贞门', 0, 25 ],
    [ 1525, 640, '惠新西街南口', 56, -15 ],
    [ 1640, 640, '芍药居', 35, -15 ],
    [ 1705, 645, '', 33, 5 ],
    [ 1728, 665, '三元桥', 33, 23 ],
    [ 1730, 715, '亮马桥', 30, 5 ],
    [ 1730, 790, '农业展览馆', -50, 5 ],
    [ 1730, 835, '团结湖', -33, 0 ],
    [ 1730, 872, '呼家楼', 33, 20 ],
    [ 1730, 930, '', 30, 0 ],
    [ 1730, 1050, '双井',25, -10 ],
];
const line10Points = line10.slice();
line10Points.splice(4, 1);
line10Points.splice(15, 1);
line10Points.splice(25, 1);
line10Points.splice(37, 1);

const airPortLine = [
    [ 1595, 790, '东直门', -32, 15 ],
    [ 1635, 778, '', -32, 15 ],
    [ 1660, 758, '', -32, 15 ],
    [ 1728, 665, '', 33, 5 ],
    [ 1743, 651, '', 33, 5 ],
    [ 1772, 641, '', 33, 5 ],
    [ 1816, 626, '', 33, 5 ],
    [ 2300, 460, '', 33, 5 ],
    [ 2450, 330, 'T3航站楼', 0, -15 ],
];

const airPortLinePoints = airPortLine.slice();
airPortLinePoints.splice(1, 2);
airPortLinePoints.splice(2, 3);

const airPortLineT2Brunch = [
    [ 2300, 460, '', 33, 5 ],
    [ 2320, 320, 'T2航站楼', 0, -15 ],
];
const airPortLineT2BrunchPoints = airPortLineT2Brunch;

const T2toT3 = [
    [ 2320, 320, 'T2航站楼', 0, -15 ],
    [ 2355, 360, '', 0, -15 ], 
    [ 2390, 360, '', 0, -15 ],
    [ 2450, 330, 'T3航站楼', 0, -15 ],
]
const T2toT3Points = T2toT3.slice();
T2toT3Points.splice(1, 2);

const newAirportLine = [
    [ 1210, 1266, '草桥', 0, -15 ],
    [ 1210, 1370, '', 0, -15 ],
    [ 1218, 1393, '', 0, -15 ],
    [ 1230, 1400, '', 0, -15 ],
    [ 1250, 1403, '', 0, -15 ],
    [ 1340, 1403, '', 0, -15 ],
    [ 1366, 1424, '', 0, -15 ],
    [ 1370, 1500, '', 0, -15 ],
    [ 1370, 1600, '大兴新城', 40, 5 ],
    [ 1370, 1850, '大兴机场', 40, 5 ],
];
const newAirportLinePoints = newAirportLine.slice();
newAirportLinePoints.splice(1, 7);

const line13 = [
    [ 1216, 795 ],
    [ 1205, 790 ],   
    [ 1195, 775 ],
    [ 1190, 750 ],
    [ 1190, 720 ],
    [ 1190, 460 ],
    [ 1225, 408 ],
    [ 1310, 400 ],
    [ 1375, 400 ],
    [ 1525, 400 ],
    [ 1600, 410 ],
    [ 1630, 440 ],
    [ 1639, 480 ],
    [ 1640, 530 ],
    [ 1640, 640 ],
    [ 1640, 680 ],
    [ 1640, 720 ],
    [ 1640, 720 ],
    [ 1625, 765 ],
    [ 1595, 790 ],
];
const line13Points = [
    [ 1216, 795, '', -35, 5 ],
    [ 1190, 720, '大钟寺', -35, 5 ],
    [ 1190, 640, '', -35, -15 ],
    [ 1188, 580, '五道口', -35, 5 ],
    [ 1188, 510, '上地', -30, 5 ],
    [ 1190, 460, '西二旗', -35, 5 ],
    [ 1225, 408, '龙泽', 0, -15 ],
    [ 1310, 400, '回龙观', 0, -15 ],
    [ 1375, 400, '霍营', 27, -15 ],
    [ 1525, 400, '', 35, 5 ],
    [ 1639, 480, '北苑', 25, 1 ],
    [ 1640, 560, '望京西', 35, -15 ],
    [ 1640, 640, '芍药居', 35, -15 ],
    [ 1640, 680, '光熙门', 30, 0],
    [ 1640, 720, '柳芳', 25, -5],
    [ 1595, 790, '', 35, 5 ],
];
const line14West = [
    [ 955, 1168, '西局', 30, 5 ],
    [ 920, 1168, '', 0, -15 ],
    [ 840, 1168, '大井', 0, -15 ], 
    [ 780, 1168, '郭庄子', 5, -15 ],
    [ 725, 1168, '大瓦窑', 5, -15 ],
    [ 680, 1168, '园博园', -5, -15 ],
    [ 620, 1168, '张郭庄', 0, -15 ],   
];
const line14WestPoints = line14West;

const line14East = [
    [ 1300, 1168, '北京南站', 40, -15 ],
    [ 1410, 1168, '永定门外', 37, -15 ],
    [ 1485, 1168, '景泰', 0, 25 ],
    [ 1525, 1168, '', 35, 5 ],
    [ 1620, 1168, '方庄', 0, 30 ],
    [ 1726, 1236, '', 35, 5 ],
    [ 1760, 1236, '北工大西门', 0, 25 ],
    [ 1795, 1236, '', 0, 25 ],
    [ 1795, 1140, '平乐园', 35, 5 ],
    [ 1795, 1050, '', 0, 25 ],
    [ 1790, 930, '', 0, 25 ],
    [ 1790, 872, '', 0, -15 ],
    [ 1790, 830, '朝阳公园', 40, 5 ],
    [ 1790, 800, '枣营', 25, 10 ],
    [ 1790, 750, '东风北桥', 40, 5 ],
    [ 1790, 710, '将台', 25, 5 ],
    [ 1790, 670, '', 40, 5 ],
    [ 1760, 627, '望京南', -31, 10 ],
    [ 1740, 600, '阜通', 25, 5 ],
    [ 1730, 585, '', 40, 5 ],
    [ 1730, 560, '望京', 28, -10 ],
    [ 1730, 520, '东湖渠', 35, 5 ],
    [ 1730, 470, '来广营', 35, 5 ],
    [ 1730, 420, '善各庄', 35, 5 ],
];
const line14EastPoints = line14East.slice();
line14EastPoints.splice(6,1);
line14EastPoints.splice(15,1);
line14EastPoints.splice(17,1);

const line15 = [
    [ 1225, 580, '清华东路西口', 20, -15 ],
    [ 1270, 580, '六道口', 0, 22 ],
    [ 1325, 580, '北沙滩', 5, 22 ],
    [ 1375, 580, '', 60, 20 ], 
    [ 1450, 570, '安立路', 0, -15 ],
    [ 1525, 560, '', 42, 5 ],
    [ 1590, 560, '关庄', 5, 22 ],
    [ 1640, 560, '', 35, 10 ],
    [ 1730, 560, '', 28, 5 ],
    [ 1800, 560, '望京东', 0, 25 ],
    [ 1850, 560, '', 0, 25 ],
    [ 1850, 510, '崔各庄', -33, 5 ],
    [ 1850, 460, '马泉营', -33, 5 ],
    [ 1850, 410, '孙河', -25, 5 ],
    [ 1850, 360, '国展', -25, 5 ],
    [ 1850, 310, '花梨坎', -33, 5 ],
    [ 1850, 260, '后沙峪', -33, 5 ],
    [ 1850, 210, '南法信', -33, 5 ],
    [ 1910, 210, '石门', 0, 25 ],
    [ 1970, 210, '顺义', 0, 25 ],
    [ 2030, 210, '俸伯', 0, 25 ],
]
const line15Points = line15.slice();
line15Points.splice(10,1);

const line16 = [
    [ 470, 285, '北安河', -15, -15 ],
    [ 520, 285, '温阳路', 0, -15 ],
    [ 570, 285, '稻香湖路', 15, -15 ],
    [ 620, 305, '屯佃', 20, -10 ],
    [ 670, 330, '永丰', 20, -10 ],
    [ 720, 355, '永丰南', 20, -10 ],
    [ 770, 380, '西北旺', 25, -15 ],
    [ 820, 405, '马连洼', 25, -15 ],
    [ 870, 430, '农大南路', 25, -15 ],
    [ 915, 475, '西苑', 0, 25 ],
]
const line16Points = line16;

const lineXijiao = [
    [ 380, 519, '香山', 0, 25 ],
    [ 500, 579, '植物园', -10, 25 ],
    [ 620, 639, '万安', 0, 25 ],
    [ 710, 639, '茶棚', 0, 25 ],
    [ 800, 639, '颐和园西门', 0, 25 ],
    [ 910, 639, '', 0, 25 ],
]
const lineXijiaoPoints = lineXijiao.slice();
lineXijiaoPoints.pop();

const lineChangPing = [
    [ 700, 50, '昌平西山口', 0, 25 ],
    [ 800, 50, '', -45, 5 ],
    [ 860, 80, '十三陵景区', 10, -25 ],
    [ 920, 110, '', -45, 5 ],
    [ 980, 110, '昌平', 0, 25 ],
    [ 1060, 110, '昌平东关', 0, 25 ],
    [ 1130, 110, '北邵洼', 0, -15 ],
    [ 1190, 110, '', -45, 5 ],
    [ 1190, 150, '南邵', -30, 5 ],
    [ 1190, 190, '沙河高教园', -50, 5 ],
    [ 1190, 230, '沙河', -30, 5 ],
    [ 1190, 280, '巩华城', -35, 5 ],
    [ 1190, 320, '', -35, 5 ],
    [ 1190, 370, '生命科学园', -50, 5 ],
    [ 1190, 460, '', -35, 5 ],
];
const lineChangPingPoints = lineChangPing.slice();
lineChangPingPoints.splice(1,1);
lineChangPingPoints.splice(2,1);
lineChangPingPoints.splice(5,1);

const lineS1 = [
    [ 520, 880, '金安桥', 0, -15 ],
    [ 420, 880, '四道桥', 0, -15 ],
    [ 320, 880, '桥户营', 0, -15 ],
    [ 300, 881, '', 0 , 0 ],
    [ 285, 885, '', 0 , 0 ],
    [ 270, 895, '', 0 , 0 ],
    [ 260, 905, '', 0 , 0 ],
    [ 245, 925, '', 0 , 0 ],
    [ 235, 950, '', 0 , 0 ],
    [ 234, 965, '', 0 , 0 ],
    [ 234, 972, '', 0 , 0 ],
    [ 234, 980, '', 0 , 0 ],
    [ 234, 1005, '上岸', -25 , 5 ],
    [ 234, 1090, '粟园庄', -35 , 5 ],
    [ 234, 1110, '', -35 , 5 ],
    [ 230, 1130, '', -35 , 5 ],
    [ 220, 1150, '', -35 , 5 ],
    [ 200, 1165, '', -35 , 5 ],
    [ 140, 1167, '小园', 0 , 25 ],
    [ 50, 1167, '石厂', 0 , 25 ],
];

const lineS1Points = lineS1.slice();
lineS1Points.splice(3, 9);
lineS1Points.splice(5, 4);

const curveGenerator = d3.svg.line().x(d => d[0]).y(d => d[1]);
curveGenerator.interpolate('cardinal');
curveGenerator.tension(0.7);

const lineGenerator = d3.svg.line().x(d => d[0]).y(d => d[1]);

const drawLine = function(data, color){
    vision.append('path')
    .attr('stroke', color)
    .attr("stroke-width", "8px")
    .attr('fill','none')
    .attr('d', lineGenerator(data));
}

const curve = function(data, color){
    vision.append('path')
    .attr('stroke', color)
    .attr("stroke-width", "8px")
    .attr('fill','none')
    .attr('d', curveGenerator(data));
}

const drawPoints = function(data, color){
    for(let i=0 ; i<data.length ; i++){
        vision.append('circle')    
        .attr("cx", data[i][0])
        .attr("cy", data[i][1])
        .attr("r", 6)
        .attr("stroke", color)
        .attr("stroke-width", "2px")
        .style('fill',"#fff");

        vision.append('text')
        .text(data[i][2])
        .attr("x", data[i][0])
        .attr('y', data[i][1])
        .attr('text-anchor', "middle")
        .attr('dx', data[i][3])
        .attr('dy', data[i][4])
    }
}

drawLine(line1, 'rgb(189,0,4,0.9)');
drawPoints(line1Points, "rgb(189,0,4,0.9)");

curve(line2, 'rgb(8,70,169,0.9)');
drawPoints(line2Points, "rgb(8,70,169,0.9)");

drawLine(lineBatong, 'rgb(189,0,4,0.9)');
drawPoints(lineBatongPoints, 'rgb(189,0,4,0.9)');

curve(line4, 'rgba(23,192,190,0.9)');
drawPoints(line4Points, 'rgba(23,192,190,0.9)');

drawLine(line5, 'rgba(133,0,84,0.9)');
drawPoints(line5Points, 'rgba(133,0,84,0.9)');

drawLine(line6, 'rgba(220,132,19,0.9)');
drawPoints(line6Points, 'rgba(220,132,19,0.9)');

drawLine(line7, 'rgba(222,74,15,0.9)');
drawPoints(line7Points, 'rgba(222,74,15,0.9)');

drawLine(line8North, 'rgba(10,83,38,0.9)');
drawPoints(line8NorthPoints, 'rgba(10,83,38,0.9)');

curve(line8South, 'rgba(10,83,38,0.9)');
drawPoints(line8SouthPoints, 'rgba(10,83,38,0.9)');

drawLine(line9, 'rgba(158,195,18,0.9)');
drawPoints(line9, 'rgba(158,195,18,0.9)');

curve(line10, 'rgba(15,132,254,0.9)');
drawPoints(line10Points, 'rgba(15,132,254,0.9)');

curve(line13, 'rgba(254,194,40,0.9)');
drawPoints(line13Points, 'rgba(254,194,40,0.9)');

drawLine(line14West, 'rgba(200,125,117,0.9)');
drawPoints(line14WestPoints, 'rgba(200,125,117,0.9)');

drawLine(line14East, 'rgba(200,125,117,0.9)');
drawPoints(line14EastPoints, 'rgba(200,125,117,0.9)');

drawLine(lineChangPing, 'rgba(180,0,111,0.9)');
drawPoints(lineChangPingPoints, 'rgba(180,0,111,0.9)');

drawLine(line15, 'rgba(60,23,72,0.9)');
drawPoints(line15Points, 'rgba(60,23,72,0.9)');

drawLine(line16, 'rgba(78,174,76,0.9)');
drawPoints(line16Points, 'rgba(78,174,76,0.9)');

drawLine(lineXijiao, 'rgba(191,34,41,0.9)');
drawPoints(lineXijiaoPoints, 'rgba(191,34,41,0.9)');

curve(lineS1, 'rgba(148,44,32,0.9)');
drawPoints(lineS1Points, 'rgba(148,44,32,0.9)');

curve(lineFangshan, 'rgba(169,58,59,0.9)');
drawPoints(lineFangshanPoints, 'rgba(169,58,59,0.9)');

drawLine(lineYanfangLine, 'rgba(207,112,56,0.9)');
drawPoints(lineYanfangLinePoints, 'rgba(207,112,56,0.9)');

drawLine(lineYizhuang, 'rgba(236, 74, 40, .9)');
drawPoints(lineYizhuangPoints, 'rgba(236, 74, 40, .9)');

curve(newAirportLine, 'rgba(44, 84, 158, .9)');
drawPoints(newAirportLinePoints, 'rgba(44, 84, 158, .9)');

curve(airPortLine, 'rgba(177, 155, 187, .9)');
drawPoints(airPortLinePoints, 'rgba(177, 155, 187, .9)');

curve(airPortLineT2Brunch, 'rgba(177, 155, 187, .9)');
drawPoints( airPortLineT2BrunchPoints, 'rgba(177, 155, 187, .9)');

curve(T2toT3, 'rgba(177, 155, 187, .9)');
drawPoints(T2toT3Points, 'rgba(177, 155, 187, .9)');

