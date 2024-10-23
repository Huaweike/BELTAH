/*const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const BaseUrl = 'https://api.ibrahiadams.us.kg';
const apikey = "ibraah-help";

zokou({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`https://api.ibrahiadams.us.kg/api/download/ytmp3v2?url=${encodeURIComponent(videoUrl)}&apikey=ibraah-help`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* mp3 (320kbps)
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌 😡
╰─────────────────◆`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });
     
       repondre('sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 254 🇰🇪');
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

zokou({
  nomCom: "song",
  categorie: "Download",
  reaction: "🎤"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`https://api.ibrahiadams.us.kg/api/download/ytmp3v2?url=${encodeURIComponent(videoUrl)}&apikey=ibraah-help`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* mp3 (320kbps)
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌 😡
╰─────────────────◆`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          document: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });
       
        repondre('sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 254 🇰🇪');
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});


zokou({
  nomCom: "video",
  categorie: "Download",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`https://api.ibrahiadams.us.kg/api/download/ytmp4v2?url=${encodeURIComponent(videoUrl)}&apikey=ibraah-help`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* 720p-HD
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌 😡
╰─────────────────◆`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
      caption: "𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌",
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre('sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 254 🇰🇪');
      } else {
        repondre('Failed to download the video. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});

zokou({
  nomCom: "videodoc",
  categorie: "Download",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;*/

/*const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x3373a2, _0xb8eb96, _0xbd3d34) => {
  const {
    ms: _0x393b2a,
    repondre: _0x3a80fb,
    arg: _0x31e7b4
  } = _0xbd3d34;
  if (!_0x31e7b4[0]) {
    _0x3a80fb("Please insert a song/video name.");
    return;
  }
  try {
    let _0x32f3fe = _0x31e7b4.join(" ");
    let _0x1511aa = [];
    const _0x1d64e6 = await yts(_0x32f3fe);
    _0x1511aa = _0x1d64e6.videos;
    if (_0x1511aa && _0x1511aa.length > 0) {
      const _0x1b4348 = _0x1511aa[0].url;
      const _0x1939a3 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp4?url=" + encodeURIComponent(_0x1b4348) + "&apikey=" + "my-vriend");
      const _0x531826 = await _0x1939a3.json();
      if (_0x531826.status === 200 && _0x531826.success) {
        const _0x400cdf = _0x531826.result.download_url;
        const _0x505669 = {
          'image': {
            'url': _0x1511aa[0].thumbnail
          },
          'caption': "*BELTAH-MD VIDEO DOWNLOADER*"
        };
        await _0xb8eb96.sendMessage(_0x3373a2, _0x505669, {
          'quoted': _0x393b2a
        });
        await _0xb8eb96.sendMessage(_0x3373a2, {
          'video': {
            'url': _0x400cdf
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x393b2a
        });
        _0x3a80fb("sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 254 🇰🇪");
      } else {
        _0x3a80fb("Searching...☢️");
      }
    } else {
      _0x3a80fb("No videos found.");
    }
  } catch (_0x482569) {
    console.error("Error from API:", _0x482569);
    _0x3a80fb("Searching...☢️");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x52185b, _0x42a02f, _0x2620c6) => {
  const {
    ms: _0x22dabe,
    repondre: _0x554a65,
    arg: _0x37b25e
  } = _0x2620c6;
  if (!_0x37b25e[0]) {
    _0x554a65("Please insert a song name.");
    return;
  }
  try {
    let _0xe2acaa = _0x37b25e.join(" ");
    let _0x15f0a6 = [];
    const _0x45d6bf = await yts(_0xe2acaa);
    _0x15f0a6 = _0x45d6bf.videos;
    if (_0x15f0a6 && _0x15f0a6.length > 0) {
      const _0x4bc93c = _0x15f0a6[0].url;
      const _0x5b9ac7 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x4bc93c) + "&apikey=" + "my-vriend");
      const _0x40b996 = await _0x5b9ac7.json();
      if (_0x40b996.status === 200 && _0x40b996.success) {
        const _0x472357 = _0x40b996.result.download_url;
        const _0xebe15a = {
          'image': {
            'url': _0x15f0a6[0].thumbnail
          },
          'caption': "*BELTAH-MD AUDIO DOWNLOADER*"
            };
        await _0x42a02f.sendMessage(_0x52185b, _0xebe15a, {
          'quoted': _0x22dabe
        });
        await _0x42a02f.sendMessage(_0x52185b, {
          'audio': {
            'url': _0x472357
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x22dabe
        });
        _0x554a65("*sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 254 🇰🇪*");
      } else {
        _0x554a65("Failed to download audio. Please try again later.");
      }
    } else {
      _0x554a65("No audio found.");
    }
  } catch (_0x3e3df7) {
    console.error("Error from API:", _0x3e3df7);
    _0x554a65("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x2f51eb, _0xfd7861, _0x4d8018) => {
  const {
    ms: _0x8669d3,
    repondre: _0x21a46b,
    arg: _0x5f3827
  } = _0x4d8018;
  if (!_0x5f3827[0]) {
    _0x21a46b("Please insert a song name.");
    return;
  }
  try {
    let _0xd82b07 = _0x5f3827.join(" ");
    let _0x163c77 = [];
    const _0x58eae3 = await yts(_0xd82b07);
    _0x163c77 = _0x58eae3.videos;
    if (_0x163c77 && _0x163c77.length > 0) {
      const _0x42b603 = _0x163c77[0].url;
      const _0xd345a5 = await fetch("https://api.ibrahimadams.us.kg/api/download/ytmp3?url=" + encodeURIComponent(_0x42b603) + "&apikey=" + "my-vriend");
      const _0x25384a = await _0xd345a5.json();
      if (_0x25384a.status === 200 && _0x25384a.success) {
        const _0x2a0604 = _0x25384a.result.download_url;
        const _0x24fa27 = {
          'image': {
            'url': _0x163c77[0].thumbnail
          },
          'caption': "*BELTAH-MD SONG DOWNLOADER*"
        }; 
        await _0xfd7861.sendMessage(_0x2f51eb, _0x24fa27, {
          'quoted': _0x8669d3
        });
        await _0xfd7861.sendMessage(_0x2f51eb, {
          'audio': {
            'url': _0x2a0604
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x8669d3
        });
        _0x21a46b("*sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 254 🇰🇪*");
      } else {
        _0x21a46b("Failed to download audio. Please try again later.");
      }
    } else {
      _0x21a46b("No audio found.");
    }
  } catch (_0x4cb1a6) {
    console.error("Error from API:", _0x4cb1a6);
    _0x21a46b("An error occurred while searching or downloading the audio.");
  }
});*/
const _0x1bd9bc=_0x46bc;(function(_0x3920b8,_0x5ed72a){const _0x3c8c9c=_0x46bc,_0x385c85=_0x3920b8();while(!![]){try{const _0x20f010=-parseInt(_0x3c8c9c(0x12a))/0x1*(parseInt(_0x3c8c9c(0x12e))/0x2)+parseInt(_0x3c8c9c(0x13d))/0x3+-parseInt(_0x3c8c9c(0x117))/0x4+-parseInt(_0x3c8c9c(0x121))/0x5+parseInt(_0x3c8c9c(0x13b))/0x6+-parseInt(_0x3c8c9c(0x13a))/0x7+-parseInt(_0x3c8c9c(0x11d))/0x8*(parseInt(_0x3c8c9c(0x138))/0x9);if(_0x20f010===_0x5ed72a)break;else _0x385c85['push'](_0x385c85['shift']());}catch(_0x8d3617){_0x385c85['push'](_0x385c85['shift']());}}}(_0x36fe,0x52465));const {zokou}=require('../framework/zokou'),yts=require(_0x1bd9bc(0x130));function _0x46bc(_0xd4968f,_0x2a9f14){const _0x36fe8a=_0x36fe();return _0x46bc=function(_0x46bc4a,_0x37834e){_0x46bc4a=_0x46bc4a-0x116;let _0x442386=_0x36fe8a[_0x46bc4a];return _0x442386;},_0x46bc(_0xd4968f,_0x2a9f14);}function _0x36fe(){const _0x594695=['Error\x20from\x20API:','334053hMvSoR','Downloded\x20Successfully\x20','1478162tzwDSw','3120558pvwllQ','*Downloded\x20Successfully\x20*','1968675vOANfv','Please\x20insert\x20a\x20song\x20name.','917180PNBIIJ','https://api.ibrahimadams.us.kg/api/download/ytmp4?url=','download_url','audio/mp4','success','An\x20error\x20occurred\x20while\x20searching\x20or\x20downloading\x20the\x20audio.','24QLoIVA','Searching...⏳','Download','video','953495gelSHm','result','Failed\x20to\x20download\x20audio.\x20Please\x20try\x20again\x20later.','&apikey=','play','json','join','length','videos','922AwKNHa','url','No\x20audio\x20found.','video/mp4','210ZhioRs','my-vriend','yt-search','song','sendMessage','No\x20videos\x20found.','error','status','BELTAH-MD\x20SEARCH\x0a\x0a\x20©Beltah\x20Tech'];_0x36fe=function(){return _0x594695;};return _0x36fe();}zokou({'nomCom':_0x1bd9bc(0x120),'categorie':'Search','reaction':'🎥'},async(_0x38a78c,_0x4d9feb,_0x4385c4)=>{const _0x410ac2=_0x1bd9bc,{ms:_0x1eaa37,repondre:_0x488a12,arg:_0x439da4}=_0x4385c4;if(!_0x439da4[0x0]){_0x488a12('Please\x20insert\x20a\x20song/video\x20name.');return;}try{let _0x21d2b4=_0x439


   /* if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4v2?url=${encodeURIComponent(videoUrl)}&apikey=${apikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n
╭───────────────◆
│ *Title:* ${videos[0].title}
│ *Quality:* 720p-HD
│ *Duration:* ${videos[0].timestamp}
│ *Viewers:* ${videos[0].views}
│ *Uploaded:* ${videos[0].ago}
│ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐇𝐀𝐂𝐊𝐈𝐍𝐆 𝐓𝐄𝐀𝐌 😡
╰─────────────────◆`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          document: { url: videoDlUrl },
               caption: "*𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃  𝐁𝐘 𝐁𝐞𝐥𝐭𝐚𝐡 𝐓𝐞𝐜𝐡 𝟐𝟓𝟒🇰🇪 *",
          mimetype: 'video/mp4'
        }, { quoted: ms });
 
       repondre('*sᴜᴄᴄᴇssғᴜʟʟʏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʙᴇʟᴛᴀʜ ᴛᴇᴄʜ 254 🇰🇪');
      } else {
        repondre('Failed to download the video. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});*/
