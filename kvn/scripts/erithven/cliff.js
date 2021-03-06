let cliff =  new Scene("erithven_cliff",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(yusie);
	erithven.bringCharacter(halley);
	erithven.bringCharacter(sophieslippedCG);
	yusie.setTextColor('white');
	sophie.setTextColor('white');
	charles.setTextColor('white');
	halley.setTextColor('white');
	sophie.preMove(20);
	erithven.display(0,null,0,function() {
		erithven.changeBackground('cliff',1,1000,function() {
			sophie.appear(1000);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Pant... Pant... Pant...',function() {
			sophie.wait(300,function() {
				sophie.speak('I must say it wasn\'t easy at all to hike all the way up here...');
			});
		},2000,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I can now see why Comet was so scared of the cliffs here',function() {
		sophie.wait(300,function() {
			sophie.speak('The chance of surviving a fall from this height is close to zero...');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('But I must say that the view from up here is really good',function() {
		sophie.wait(300,function() {
			sophie.speak('How I wish that the others can get to enjoy it as well!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I\'m sure Yusie would love the look of the ocean from all the way up here!');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Well anyways,',function() {
		sophie.wait(300);
	});
}, function(){return null})
,new Frame(function(){
	erithven.closeTextBox();
	charles.wait(1200,function() {
		charles.speak('If I remember correctly...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Rigortas are white in color while Meisumptums are red in color');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('So I should be looking out for clusters of this color around the cliffs which are more accessible than the rest',function() {
		charles.wait(200,function() {
			charles.speak('Those places will most likely be where I will be able to find Soph-');
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Charles...?',function() {
			halley.wait(200,function() {
				halley.contSpeaking('You\'re Charles, right?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Yeah');
	});
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('When do you want me to get the herbs for you?',function() {
			halley.wait(200,function() {
				halley.contSpeaking('I\'m ready to prove my abilities to this stupid girl!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Actually...',function() {
			charles.wait(300,function() {
				charles.contSpeaking('How about this?',function() {
					charles.wait(200,function() {
						charles.speak('Instead of getting the herbs, I need you to help me fetch Princess Sophie up in the event that she\'s caught on the path at the side of the Cliff');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('And don\'t worry because you\'ll still be able to show your trekking and climbing ability');
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Sorry but I\'m not going to do anything for any member of the Royal Family');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('We\'ll see then');
	});
}, function(){return null})
,new Frame(function(){
	charles.move(10,null,500,function() {
		erithven.closeTextBox();
		charles.wait(1200,function() {
			charles.speak('I see quite a large cluster of Meisumptums on the side of the cliff at the opposite side',function() {
				charles.wait(200,function() {
					charles.speak('There\'s a little path by the cliff if I\'m not seeing things');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Is that Sophie on the right hand side of the red cluster of herbs?');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('You mean the left hand side?',function() {
			charles.wait(200,function() {
				charles.speak('Yes, I think you\'re right!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('It seems like Sophie has collected quite a number of the herbs already!');
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.changeBold(true);
		yusie.setFontSize('2vw');
		yusie.speak('AHHHH!!!');
		sophieslippedCG.bringAboveOverlay();
		yusie.wait(700,function() {
			erithven.closeTextBox();
			sophieslippedCG.appear(1000);
			erithven.changeOverlay(1,'black',700,function() {
				sophieslippedCG.wait(2000);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophieslippedCG.disappear(700);
	erithven.changeOverlay(0,'black',1000,function() {
		charles.changeBold(true);
		charles.setFontSize('2vw');
		charles.preSpeak(function() {
			charles.speak('SOPHIE!',function() {
				charles.wait(200,function() {
					charles.contSpeaking('ARE YOU OKAY?!!!',null,700,false);
				});
			},700,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.wait(400);
	sophie.setFontSize('1.2vw');
	sophie.speak('C-Charles..?',function() {
		sophie.wait(200,function() {
			sophie.contSpeaking('Is that you?');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('YEAH!',function() {
			charles.wait(200,function() {
				charles.contSpeaking('HANG ON THERE!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('WE\'LL TRY TO FIND A WAY TO GET YOU UP',function() {
		yusie.interupt(function() {
			yusie.speak('AHHHH!!!');
			sophieslippedCG.bringAboveOverlay();
			yusie.endSpeak();
			yusie.wait(700,function() {
				erithven.closeTextBox();
				sophieslippedCG.appear(1000);
				erithven.changeOverlay(1,'black',700,function() {
					sophieslippedCG.move(null,20,0,function() {
						sophieslippedCG.wait(150,function() {
							sophieslippedCG.move(null,-20,0,function() {
								sophieslippedCG.wait(2000);
							},easeIn,false);
						});
					},easeIn,false);
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophieslippedCG.disappear(700);
	erithven.changeOverlay(0,'black',1000,function() {
		sophie.speak('I\'m okay!',function() {
			sophie.wait(200);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.setNormalText();
	charles.setFontSize('1.7vw');
	charles.preSpeak(function() {
		charles.speak('Halley, I think we need your help right now!');
	});
}, function(){return null})
,new Frame(function(){
	halley.changeItalic(true);
	halley.setFontSize('1.4vw');
	halley.preSpeak(function() {
		halley.speak('Should I help them...?');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Ugh...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Forget about it');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.flipHorizontally(function() {
		charles.move(-80,null,850);
		yusie.wait(250,function() {
			yusie.move(-90,null,950,function() {
				halley.wait(400,function() {
					halley.flipHorizontally(function() {
						halley.move(-30,null,300,function() {
							charles.disappear();
							yusie.disappear();
							halley.disappear();
							charles.move(140);
							yusie.move(140);
							halley.move(140);
							erithven.closeTextBox();
							erithven.changeBackground('finalcliff',1,1000);
						});
					},200);
				});
			});
		});
	},200);
}, function(){return null})
,new Frame(function(){
	charles.appear();
	yusie.appear();
	halley.appear(null,function() {
		charles.move(-50,null,850);
		yusie.move(-30,null,850);
		halley.move(-50,null,850,function() {
			charles.preSpeak(function() {
				charles.changeBold();
				charles.setFontSize('2vw');
				charles.speak('Sophie!',function() {
					charles.wait(200,function() {
						charles.contSpeaking('Hang on! I\'ll figure out a way to get you up!');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.endSpeak();
	sophie.setFontSize('1.5vw');
	sophie.speak('It\'s okay!',function() {
		sophie.wait(500,function() {
			sophie.contSpeaking('I\'m a-almost up...',null,1200,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.appear(1000,function() {
		sophie.move(null,-50,2500,function() {
			sophie.move(3,2,300,function() {
				sophie.wait(100,function() {
					sophie.rotateClockwise(null,200);
					sophie.move(3,-22,400,null,swing);
				});
			});
		},easeOut);
	});
}, function(){return null})
,new Frame(function(){
	sophie.setFontSize('1.7vw');
	yusie.setFontSize('1.7vw');
	halley.setFontSize('1.7vw');
	charles.setFontSize('1.7vw');
	yusie.setNormalText();
	halley.setNormalText();
	charles.setNormalText();
	sophie.preSpeak(function() {
		sophie.speak('Pheww...',function() {
			sophie.wait(500,function() {
				sophie.contSpeaking('That was close!');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I\'m so glad that you\'re safe!',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('We were so worried about you!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Sorry for causing all of you to get so worried...');
	});
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Hey...',function() {
			halley.wait(200,function() {
				halley.contSpeaking('I\'m sorry for not stopping Princess Sophie from attempting such a dangerous thing');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('You better be!',function() {
			yusie.wait(300,function() {
				yusie.contSpeaking('You were still so reluctant to save Princess Sophie when Charles asked you to do so earlier');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('I\'ve no idea what was going on in your head!');
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Hey!');
		halley.wait(300,function() {
			halley.contSpeaking('I\'ve already apologized!',function() {
				halley.wait(300,function() {
					halley.speak('Can you stop bugging me?');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I just don\'t understand what do you hold against the Royal Family...');
	});
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('They abandoned me back then in the Great War against Kapitolis',function() {
			halley.wait(300,function() {
				halley.speak('Is that a good enough reason?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('What do you mean by that?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('You knew my parents personally?');
	});
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Back then during the Great War, I served as the Royal Ranger who led an elite team of rangers to lay an ambush in the mountains that bordered Kapitolis',function() {
			halley.wait(300,function() {
				halley.speak('However, because our ambush plans were compromised by a defeated Novalan Battalion,',function() {
					halley.wait(300,function() {
						halley.contSpeaking('the King and Queen ordered our reinforcements to retreat, leaving us stranded behind the enemy lines');
					});
				},1100);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.speak('In the end, I was the only ranger who made it out alive',function() {
		halley.wait(300,function() {
			halley.speak('I lost all of my brothers who had fought along side me because of one command',function() {
				halley.wait(300,function() {
					halley.speak('One stupid command from the King and the Queen!');
				});
			});
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	halley.speak('Tell me!',function() {
		halley.wait(300,function() {
			halley.contSpeaking('Is it wrong of me to hate them?');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('...',null,1000,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Halley, I\'m so sorry about that...',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('I know that there\'s nothing that I can do to make it up to you...');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('But I hope that you can forgive my parents on my behalf!');
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('...',function() {
			halley.wait(300,function() {
				halley.contSpeaking('I don\'t think that I can ever forgive anyone who treated my life like shit');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	halley.speak('But I must say that I have been quite impressed with you',function() {
		halley.wait(300,function() {
			halley.speak('It\'s been a while since I\'ve seen anyone with this amount of moral courage');
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.speak('The kind of selflessness and sense of responsibility which you\'ve shown is really commendable!',function() {
		halley.wait(300,function() {
			halley.speak('Not to mention the agility which you\'ve exhibited when you scaled this cliff');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('It\'s really nothing much...',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('My parents always told me that we owe our power to the people');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('And I believe that as long as the tasks are within my means, I should always put in my best to make things right for others');
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Well said!',function() {
			halley.wait(300,function() {
				halley.speak('If you don\'t mind me asking, may I know what actually happened back at the castle?',function() {
					halley.wait(300,function() {
						halley.contSpeaking('Why are both of you on the run?');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Minister Mistrassimo launched a coup and ordered a secret force which he had been developing for years to chase after the Royal Family',function() {
			charles.wait(300,function() {
				charles.speak('We broke up with Princess Sophie\'s parents while escaping and we\'re now trying to rendezvous with them',function() {
					charles.wait(300,function() {
						charles.speak('The King and Queen were last seen in Malidret and that\'s where we\'re heading for now');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('I see...',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('Now everything makes sense!');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Mistrassimo\'s network of underlings is so humongous that we\'ve no choice but to keep a low profile',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('His control over the media makes it even harder for us to progress to Malidret!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Don\'t you worry, Princess Sophie!',function() {
			yusie.wait(200,function() {
				yusie.contSpeaking('I will definitely join your side and help you take down Mistrassimo!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('What about you Halley?');
	});
}, function(){return null})
,new Frame(function(){
	halley.preSpeak(function() {
		halley.speak('Me?',function() {
			halley.wait(300,function() {
				halley.contSpeaking('I will never help anyone from the Royal Family!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Charles, why\'re you so quiet?');
	});
}, function(){return null})
,new Frame(function(){
	erithven.displayText('...',1000,null,null,null,null,null,null,null,false);
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Err...',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('I\'m sorry Charles...');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Can you stop being angry...?');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('How do you expect me to be calm about this?',function() {
			charles.wait(300,function() {
				charles.speak('Your parents left you in my care and yet you disobeyed my instructions');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('I can\'t believe you can\'t see the big picture...',function() {
		charles.wait(200,function() {
			charles.speak('I understand that you want to save people and make them happy');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('But we\'re talking about your parents and the fate of the entire Kingdom over here',function() {
		charles.wait(300,function() {
			charles.speak('Can you imagine what the other countries would do to us the moment they become aware of our political instability?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('B-Bu...',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('You\'re right...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I was too reckless...',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('I should have listened to you and not ran off on my own...');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I p-promise you that I won\'t do this again...');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Have you gotten the herbs?',function() {
			charles.wait(300,function() {
				charles.contSpeaking('If you\'ve collected them already, let\'s return to the pharmacy',function() {
					charles.flipHorizontally(function() {
						charles.move(80,null,850);
					},200);
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('Is Charles still angry...?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('I think so...',function() {
			sophie.wait(500);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.contSpeaking('Let\'s catch up with him!',function() {
		sophie.wait(300,function() {
			sophie.speak('I\'m done collecting all the herbs');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.move(100,null,1050);
	yusie.wait(200,function() {
		halley.flipHorizontally(null,200);
		yusie.flipHorizontally(function() {
			halley.move(100,null,1050);
			yusie.move(100,null,1050);
		},200);
	});
}, function(){return null})
]);