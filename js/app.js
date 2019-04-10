'use-strict'

// display images


function Horns(horn){
    this.image_url = horn.image_url;
    this.title = horn.title;
    this.description = horn.description;
    this.keyword = horn.keyword;
    this.numHorns = horn.horns;
    Horns.allHorns.push(this);
}

Horns.allHorns = [];

Horns.prototype.render = function(){
    $('main').append('<div class="clone"></div>');
    let hornClone = $('div[class = "clone"]');
    
    let hornHTML = $('#horn-template').html();
    
    hornClone.html(hornHTML);
    
    hornClone.find('h2').text(this.title);
    hornClone.find('image').attr('src',this.image_url);
    hornClone.find('image').attr('alt',this.keyword);
    hornClone.find('p').text(this.description);
    hornClone.removeClass('clone');
    hornClone.addClass(this.numHorns + ' horns');
    hornClone.attr('class', this.title);
}

const readHorns = () => {
$.get('data/page-1.json','json')
    .then(data => {
       data.forEach(item => {new Horns(item)     
       }); 
    })
    .then(Horns.loadHorns);
};

