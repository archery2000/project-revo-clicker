function soundLoadPhase() {
	window.brostikaM = new GameSound(VN,'Brostika.mp3',true);	window.darkAlleyM = new GameSound(VN,'Dark_Alley.mp3',true);	window.edgeOfBoriolsisM = new GameSound(VN,'Edge_of_Borolsis.mp3',true);	window.erithvenM = new GameSound(VN,'Erithven.mp3',true);	window.erithvenApothecaryM = new GameSound(VN,'Erithven_Apothecary.mp3',true);	window.malidretM = new GameSound(VN,'Malidret.mp3',true);	window.revelationRevolutionM = new GameSound(VN,'Revelation_Revolution.mp3',true);	window.deathM = new GameSound(VN,'Royal_Death.mp3',true);	window.solemnStrengthM = new GameSound(VN,'Solemn_Strength.mp3',true);	window.sophiesRoomM = new GameSound(VN,'Sophies_Room.mp3',true);	window.titleM = new GameSound(VN,'The_Princess_Saviour.mp3',true);	window.valleyOfKusuriM = new GameSound(VN,'Valley_of_Kusuri.mp3',true);	window.stabM = new GameSound(VN,'stab.mp3',true);	window.xperrorM = new GameSound(VN,'error.mp3',true);	window.footsteps = new GameSound(VN,'footstep.wav',true);}

var playName = 'Marcus';
function publicStaticVoidMain(id){
if(id===0){
	playScene('brostika_alley',0);
}
}
window.sophie = new Character('sophie','Sophie','sophie.png',61.2,61.2*1.4,-35,56,50,50);
sophie.addSprite('overjoyed','sophie.png');
sophie.addSprite('sad','sophie.png');
sophie.setTextColor('white');
sophie.setDefaultSkippable(true);
sophie.setDefaultAnimateInterpolation(swing);
sophie.complete();
window.charles = new Character('charles','Charles','charles.png',68,68*1.4,-15,55,50,50);
charles.setHorizontalFlip(true);
charles.setTextColor('white');
charles.setDefaultSkippable(true);
charles.setDefaultAnimateInterpolation(swing);
charles.complete();
window.chelsea = new Character('chelsea','Chelsea','Chelsea.png',68,58*1.4,30.9,65,50,50);
chelsea.setFontSize('1.5vw');
chelsea.setTextColor('white');
chelsea.setDefaultSkippable(true);
chelsea.setDefaultAnimateInterpolation(swing);
chelsea.complete();
window.tristan = new Character('tristan','Tristan','tristan.png',60,60*1.4,60.2,36,10,10);
tristan.setTextColor('white');
tristan.setDefaultSkippable(true);
tristan.setDefaultAnimateInterpolation(swing);
tristan.complete();
window.yusie = new Character('yusie','Yusie','yusie.png',60,60*1.4,30,55,50,50);
yusie.setTextColor('white');
yusie.setDefaultSkippable(true);
yusie.setDefaultAnimateInterpolation(swing);
yusie.complete();
window.broski = new Character('broski','Broski','broski.png',55,55*1.4,30,55,50,50);
broski.setTextColor('white');
broski.setDefaultSkippable(true);
broski.setDefaultAnimateInterpolation(swing);
broski.complete();
window.healingMagicCG = new Character('healingMagicCG','CG 1','cg1.jpg',100,56.25,0,0,50,50);
healingMagicCG.setTextColor('white');
healingMagicCG.setDefaultSkippable(true);
healingMagicCG.setDefaultAnimateInterpolation(swing);
healingMagicCG.complete();
window.yusieHelpedCG = new Character('yusieHelpedCG','CG 2','cg_help.jpg',100,56.25,0,0,50,50);
yusieHelpedCG.setTextColor('white');
yusieHelpedCG.setDefaultSkippable(true);
yusieHelpedCG.setDefaultAnimateInterpolation(swing);
yusieHelpedCG.complete();
window.slime = new Character('slime','Slime','slime.png',25,25,60,0,50,50);
slime.setTextColor('white');
slime.setDefaultSkippable(true);
slime.setDefaultAnimateInterpolation(swing);
slime.complete();
window.slime2 = new Character('slime2','Slime','slime.png',28,28,70,20,50,50);
slime2.setTextColor('white');
slime2.setDefaultSkippable(true);
slime2.setDefaultAnimateInterpolation(swing);
slime2.complete();
window.sickchild = new Character('sickchild','Sick Child','sickchild.png',22,22*1.4,25,28,0,100);
sickchild.setTextColor('white');
sickchild.setDefaultSkippable(true);
sickchild.setDefaultAnimateInterpolation(swing);
sickchild.complete();
window.mother = new Character('mother','Mother','mother.png',60,60*1.4,15,30,0,100);
mother.setTextColor('white');
mother.setDefaultSkippable(true);
mother.setDefaultAnimateInterpolation(swing);
mother.complete();
window.halley = new Character('halley','Halley','halley.png',66,66*1.4,40,50,50,50);
halley.setTextColor('white');
halley.setDefaultSkippable(true);
halley.setDefaultAnimateInterpolation(swing);
halley.complete();
window.comet = new Character('comet','Comet','salley.png',60,60*1.4,25,55,50,50);
comet.setTextColor('white');
comet.setDefaultSkippable(true);
comet.setDefaultAnimateInterpolation(swing);
comet.complete();
window.sophieslippedCG = new Character('sophieslippedCG','CG 3','cg_slipcliff.jpg',100,56.25,0,0,50,50);
sophieslippedCG.setTextColor('white');
sophieslippedCG.setDefaultSkippable(true);
sophieslippedCG.setDefaultAnimateInterpolation(swing);
sophieslippedCG.complete();
window.ruskoff = new Character('ruskoff','Ruskoff','v_boriolsis/ruskoff/arrogant.png',68,68*1.4,8,12,0,100);
ruskoff.setTextColor('white');
ruskoff.setDefaultSkippable(true);
ruskoff.setDefaultAnimateInterpolation(swing);
ruskoff.complete();
window.minion = new Character('minion','Minion','v_boriolsis/ruskoff/arrogant.png',68,68*1.4,-20,15,0,100);
minion.setTextColor('white');
minion.setDefaultSkippable(true);
minion.setDefaultAnimateInterpolation(swing);
minion.complete();
window.minion1 = new Character('minion1','Minion','v_boriolsis/ruskoff/arrogant.png',68,68*1.4,-40,18,0,100);
minion1.setTextColor('white');
minion1.setDefaultSkippable(true);
minion1.setDefaultAnimateInterpolation(swing);
minion1.complete();
window.minion2 = new Character('minion2','Minion','v_boriolsis/ruskoff/arrogant.png',68,68*1.4,-8,12,0,100);
minion2.setTextColor('white');
minion2.setDefaultSkippable(true);
minion2.setDefaultAnimateInterpolation(swing);
minion2.complete();
window.june = new Character('june','June','alchemist.png',68,68*1.4,15,25,50,50);
june.setTextColor('white');
june.setDefaultSkippable(true);
june.setDefaultAnimateInterpolation(swing);
june.complete();
window.chief = new Character('chief','Helmuth','chief.png',68,68*1.4,12,53,50,50);
chief.setTextColor('white');
chief.setDefaultSkippable(true);
chief.setDefaultAnimateInterpolation(swing);
chief.complete();
window.sSophie = new Character('sSophie','Sophie','sophie_young.png',68,68*1.4,0,0,50,50);
sSophie.setTextColor('white');
sSophie.setDefaultSkippable(true);
sSophie.setDefaultAnimateInterpolation(swing);
sSophie.complete();
window.sCharles = new Character('sCharles','Charles','charles_young.png',68,68*1.4,0,0,50,50);
sCharles.setTextColor('white');
sCharles.setDefaultSkippable(true);
sCharles.setDefaultAnimateInterpolation(swing);
sCharles.complete();
window.slane = new Character('slane','Slane','v_boriolsis/slane/slysmile.png',68,68*1.4,12,15,50,50);
slane.setTextColor('white');
slane.setDefaultSkippable(true);
slane.setDefaultAnimateInterpolation(swing);
slane.complete();
window.wizard = new Character('wizard','Wizard','v_boriolsis/wizard/polite.png',69,68*1.4,10,8,0,100);
wizard.setTextColor('white');
wizard.setDefaultSkippable(true);
wizard.setDefaultAnimateInterpolation(swing);
wizard.complete();
window.king = new Character('king','King','v_boriolsis/king/smile.png',68,68*1.4,35.9,15.7,50,50);
king.setFontSize('1.5vw');
king.setTextColor('white');
king.setDefaultSkippable(true);
king.setDefaultAnimateInterpolation(swing);
king.complete();
window.queen = new Character('queen','Queen','v_boriolsis/queen/smile.png',68,68*1.4,25.9,20.5,50,50);
queen.setFontSize('1.5vw');
queen.setTextColor('white');
queen.setDefaultSkippable(true);
queen.setDefaultAnimateInterpolation(swing);
queen.complete();
window.patrick = new Character('patrick','Patrick','v_malidret/patrick/pain.png',60,60*1.4,15,28,0,100);
patrick.setTextColor('white');
patrick.setDefaultSkippable(true);
patrick.setDefaultAnimateInterpolation(swing);
patrick.complete();
window.minion3 = new Character('minion3','Minion','v_boriolsis/ruskoff/arrogant.png',68,68*1.4,-6,12,0,100);
minion3.setTextColor('white');
minion3.setDefaultSkippable(true);
minion3.setDefaultAnimateInterpolation(swing);
minion3.complete();
window.brostika = new Stage('brostika','brostika_outside.jpg');
brostika.addBackground('alley','alley.png');
brostika.addBackground('police','police.png');
brostika.addBackground('winery','winery.png');
brostika.setDefaultSkippable(true);
brostika.setDefaultAnimateInterpolation(swing);
brostika.complete();
window.boriolsis = new Stage('boriolsis','boriolsis/town.jpg');
boriolsis.addBackground('house','boriolsis/house.jpg');
boriolsis.addBackground('forest','boriolsis/forest.jpg');
boriolsis.setDefaultSkippable(true);
boriolsis.setDefaultAnimateInterpolation(swing);
boriolsis.complete();
window.erithven = new Stage('erithven','erithven.jpg');
boriolsis.addBackground('outsidehouse','outsidehouse.png');
boriolsis.addBackground('house','sick_boy_s_room.png');
boriolsis.addBackground('pharma','pharma.png');
boriolsis.addBackground('cliff','cliff.png');
boriolsis.addBackground('finalcliff','finalcliff.png');
erithven.setDefaultSkippable(true);
erithven.setDefaultAnimateInterpolation(swing);
erithven.complete();
window.malidret = new Stage('malidret','malidret.png');
malidret.setDefaultSkippable(true);
malidret.setDefaultAnimateInterpolation(swing);
malidret.complete();