$(function() {
    "use strict";
    if ($('.audio-player').length) {
		var myPlayListOtion = '<ul class="more_option"><li><a href="#"><span class="opt_icon" title="Add To Favourites"><span class="icon icon_fav"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Add To Queue"><span class="icon icon_queue"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Download Now"><span class="icon icon_dwn"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Add To Playlist"><span class="icon icon_playlst"></span></span></a></li><li><a href="#"><span class="opt_icon" title="Share"><span class="icon icon_share"></span></span></a></li></ul>';
		
        var myPlaylist = new jPlayerPlaylist({
            jPlayer: "#jquery_jplayer_1",
            cssSelectorAncestor: "#jp_container_1"
        }, [{
			image : 'images/weekly/song1.jpg',	
            title: "Pokémon Indigo League",
            artist: "",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%201%20Indigo%20League%20%20Opening%20Theme.mp3?alt=media&token=37755c88-69fa-4c17-a545-c62e6542883f",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%201%20Indigo%20League%20%20Opening%20Theme.mp3?alt=media&token=37755c88-69fa-4c17-a545-c62e6542883f",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song2.jpg',	
            title: "Pokémon: The Johto Journeys",
            artist: "",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Adventures%20on%20the%20Orange%20Islands%20%20Opening%20%20%20%20English%20%20YouTube.mp3.webm?alt=media&token=e1ad060a-e3e4-474b-84b5-b911c7eab7bb",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Adventures%20on%20the%20Orange%20Islands%20%20Opening%20%20%20%20English%20%20YouTube.mp3.webm?alt=media&token=e1ad060a-e3e4-474b-84b5-b911c7eab7bb",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song3.jpg',	
            title: "Pokémon: Johto League Champions",
            artist: "",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20The%20Johto%20Journeys%20%20%20Opening%20%20English%20%20YouTube.mp3?alt=media&token=6773b355-51a6-4740-b198-df81695956ba",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20The%20Johto%20Journeys%20%20%20Opening%20%20English%20%20YouTube.mp3?alt=media&token=6773b355-51a6-4740-b198-df81695956ba",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song4.jpg',	
            title: "Pokémon: Master Quest",
            artist: "",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%204%20Johto%20League%20Champions%20%20Opening%20Theme.mp3.webm?alt=media&token=b0491c5a-b6eb-475c-b6a6-735e2f56342e",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%204%20Johto%20League%20Champions%20%20Opening%20Theme.mp3.webm?alt=media&token=b0491c5a-b6eb-475c-b6a6-735e2f56342e",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song5.jpg',	
            title: "Pokémon: Advanced",
            artist: "",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%205%20Master%20Quest%20%20Opening%20Theme.mp3?alt=media&token=9ab23f4c-1805-4808-92d7-0875b6b2f193",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%205%20Master%20Quest%20%20Opening%20Theme.mp3?alt=media&token=9ab23f4c-1805-4808-92d7-0875b6b2f193",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song6.jpg',	
            title: "Pokémon: Advanced Challenge",
            artist: "",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%207%20Advanced%20Challenge%20%20Opening%20Theme.mp3?alt=media&token=9e2bc23c-abde-4922-813a-31aae7079768",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Season%207%20Advanced%20Challenge%20%20Opening%20Theme.mp3?alt=media&token=9e2bc23c-abde-4922-813a-31aae7079768",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song7.jpg',	
            title: " Pokémon: Advanced Battle",
            artist: "",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Advanced%20Battle%20%20Opening.mp3?alt=media&token=8a931674-72e4-4b52-9272-e512b7117631",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20Advanced%20Battle%20%20Opening.mp3?alt=media&token=8a931674-72e4-4b52-9272-e512b7117631",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song8.jpg',	
            title: "Pokémon: Battle Frontier",
            artist: "",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pokemon%20Battle%20Frontier%20Theme%20song%20Intro%20full.mp3?alt=media&token=8a126823-9908-4783-98ff-97be910616b8",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pokemon%20Battle%20Frontier%20Theme%20song%20Intro%20full.mp3?alt=media&token=8a126823-9908-4783-98ff-97be910616b8",
			option : myPlayListOtion
        }, {
			image : 'images/weekly/song9.jpg',	
            title: "Pokémon: Diamond and Pearl",
            artist: " ",
            mp3: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20%20Opening%2010%20Diamond%20and%20Pearl%20English.mp3?alt=media&token=5ea8f0b5-19cb-4cba-8a59-7f77aecf4f13",
            oga: "https://firebasestorage.googleapis.com/v0/b/pikachu-c4459.appspot.com/o/song%2Fy2mate.com%20-%20Pok%C3%A9mon%20%20Opening%2010%20Diamond%20and%20Pearl%20English.mp3?alt=media&token=5ea8f0b5-19cb-4cba-8a59-7f77aecf4f13",
			option : myPlayListOtion
        }], {
            swfPath: "js/plugins",
            supplied: "oga, mp3",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            playlistOptions: {
                autoPlay: false
            }
        });
        $("#jquery_jplayer_1").on($.jPlayer.event.ready + ' ' + $.jPlayer.event.play, function(event) {
            var current = myPlaylist.current;
            var playlist = myPlaylist.playlist;
            $.each(playlist, function(index, obj) {
                if (index == current) {
                    $(".jp-now-playing").html("<div class='jp-track-name'><span class='que_img'><img src='"+obj.image+"'></span><div class='que_data'>" + obj.title + " <div class='jp-artist-name'>" + obj.artist + "</div></div></div>");
                }
            });
			$('.knob-wrapper').mousedown(function() {
                $(window).mousemove(function(e) {
                    var angle1 = getRotationDegrees($('.knob')),
					volume = angle1 / 270 					
					
                    if (volume > 1) {
                        $("#jquery_jplayer_1").jPlayer("volume", 1);
                    } else if (volume <= 0) {
                        $("#jquery_jplayer_1").jPlayer("mute");
                    } else {
                        $("#jquery_jplayer_1").jPlayer("volume", volume);
                        $("#jquery_jplayer_1").jPlayer("unmute");
                    }
                });
				
                return false;
            }).mouseup(function() {
                $(window).unbind("mousemove");
            });
			
			
			function getRotationDegrees(obj) {
				var matrix = obj.css("-webkit-transform") ||
				obj.css("-moz-transform")    ||
				obj.css("-ms-transform")     ||
				obj.css("-o-transform")      ||
				obj.css("transform");
				if(matrix !== 'none') {
					var values = matrix.split('(')[1].split(')')[0].split(',');
					var a = values[0];
					var b = values[1];
					var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
				} else { var angle = 0; }
				return (angle < 0) ? angle + 360 : angle;
			}

			
			
			
			
            var timeDrag = false;
            $('.jp-play-bar').mousedown(function(e) {
                timeDrag = true;
                updatebar(e.pageX);
				
            });
            $(document).mouseup(function(e) {
                if (timeDrag) {
                    timeDrag = false;
                    updatebar(e.pageX);
                }
            });
            $(document).mousemove(function(e) {
                if (timeDrag) {
                    updatebar(e.pageX);
                }
            });
            var updatebar = function(x) {
                var progress = $('.jp-progress');
                var position = x - progress.offset().left;
                var percentage = 100 * position / progress.width();
                if (percentage > 100) {
                    percentage = 100;
                }
                if (percentage < 0) {
                    percentage = 0;
                }
                $("#jquery_jplayer_1").jPlayer("playHead", percentage);
                $('.jp-play-bar').css('width', percentage + '%');
            };
            $('#playlist-toggle, #playlist-text, #playlist-wrap li a').unbind().on('click', function() {
                $('#playlist-wrap').fadeToggle();
                $('#playlist-toggle, #playlist-text').toggleClass('playlist-is-visible');
            });
            $('.hide_player').unbind().on('click', function() {
                $('.audio-player').toggleClass('is_hidden');
                $(this).html($(this).html() == '<i class="fa fa-angle-down"></i> HIDE' ? '<i class="fa fa-angle-up"></i> SHOW PLAYER' : '<i class="fa fa-angle-down"></i> HIDE');
            });
            $('body').unbind().on('click', '.audio-play-btn', function() {
                $('.audio-play-btn').removeClass('is_playing');
                $(this).addClass('is_playing');
                var playlistId = $(this).data('playlist-id');
                myPlaylist.play(playlistId);
            });
			
        });
    }
});