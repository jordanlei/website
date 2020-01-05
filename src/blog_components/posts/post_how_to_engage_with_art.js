import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from '../parallax';
import PostMenu from './post-menu';

class Post_how_to_engage_with_art extends Component {
  render() {
    const items = {
      name : "blogpost",
      background: "linear-gradient(rgba(10, 9, 54, 1), rgba(176, 50, 25, 1))",
      backgrounddepth: "-0.3",
      layers: [ 
      {image: require("../../public/static/blog/sparse_dots.svg"), depth: "-0.90", name: "layer1"},
      {image: require("../../public/static/blog/posts/how-to-engage-with-art-1.svg"), depth: "-0.2",  name: "layer2"},
      {image: require("../../public/static/blog/posts/how-to-engage-with-art-2.svg"), depth: "-0.3",  name: "layer3"},
      {image: require("../../public/static/blog/posts/how-to-engage-with-art-2.svg"), depth: "-0.4",  name: "layer4"},
      ]
    }

    return (
    <div>
        <PostMenu/>
        <section id="blog-head">
            <Parallax items = {items}>
                <div className= "blog-namecard">
                    <Row>
                        <Col md={5} className= "blog-title">
                            <Fade bottom duration= {5000}>
                                <h1>How to Engage with Art</h1>
                                <h2>A Guide Made for and by an Amateur</h2>
                                <h3><i>Posted by Jordan Lei 12.12.19</i></h3>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </Parallax>
        </section>
        <div className= "blog-container">
            <div className= "blog-post" style={{padding: "5%", backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                <h3>
                    Two Blackboards and a Bucket
                </h3>
                <p>
                    Picture this: you're in a museum, and you walk up to a piece.
                    There's not much to look at - just two nondescript black boards 
                    with a bucket sitting idly between them. 
                    How on earth could this be art? You scratch your head as you hear 
                    an old man behind you mutter something about degenerates. Okay, so 
                    maybe you’re not that angry about the piece, but nevertheless, you’re 
                    perplexed, if not a bit upset.
                </p>
                <p>
                    You want to engage, but there’s so little to engage with. It’s not like 
                    you don’t have any idea what good art looks like. In the Renaissance and 
                    Romantic exhibits, you can marvel at the skill and artistry necessary to 
                    craft gorgeous life-like pieces. But once Modernism hits, you begin to 
                    break into a sweat.
                </p>
                <p>
                    Perhaps, like fine wine, art has been left to the elites to enjoy and 
                    define what is “good.” Perhaps it’s a lost cause. Or, perhaps, like the 
                    classic children’s fable The Emperor’s New Clothes, we’re all playing 
                    along to a cruel joke, waiting for some child to come along and make clear 
                    that we’re all delusional.
                </p>
                <p>
                    All of these points are valid, and many of them are partially true. But if 
                    the goal here is to better understand the artwork we see in museums, our homes, 
                    and on our bustling city streets, it might be helpful to keep an open mind and 
                    see if we can glean something from art as it exists today.
                </p>
                <p>
                    The term art has come to encompass so many diverse and exciting fields that it 
                    would be impossible to cover it all in an article, so for now let’s focus our 
                    attention primarily on visual art, although the concepts we explore here will 
                    extend to other forms of art as well.
                </p>
                <p>
                    In this article, I’m going to introduce three different ways of looking at art. 
                    While not all encompassing, they’re a good first step in being able to enjoy, 
                    and possibly even engage, with the art world around us.
                </p>
                <h3>
                    Art as Representation
                </h3>
                <p>
                    Ah, something familiar! We’re all well-versed in the concept of art as a 
                    representation of visual perception. Take the Mona Lisa, for example. It’s easy to 
                    see that the piece is a work of art. The amount of detail and realism in every square 
                    inch of the painting is remarkable, to say the least.
                </p>
                <p>
                    But perhaps art represents more than meets the eye. As participants and sometimes even 
                    instigators of history, art and history are inevitably related. You can’t have one 
                    without another. Artists, and the art they produce, are a reflection of the times 
                    they lived in. In this way, art tells a story, not only about the narrative which may 
                    be present in the canvas, but also the history surrounding it, and the time in which it 
                    existed.
                </p>
                <div className= "blog-image" style={{width: "300px", padding: "5%", float: "right", fontSize: "15px"}}>
                <img src= {require("../../public/static/blog/posts/waterlilies-monet.jpg")} 
                style={{width: "100%"}}/>
                <i>Bridge over a Pond of Water Lilies, Claude Monet</i>
                </div>
                <p>
                    A great example of this is the Impressionist Movement. If you look at this piece by 
                    Monet (often cited as “the Father of Impressionism”), you might be perplexed. Compared 
                    to the art that came before, it seems like art has taken a step back from realism. Some 
                    of his pieces are blurry, and almost shimmer, as if your eyes can’t focus on a single 
                    part of the painting. How do we appreciate art like this?
                </p>
                <p>
                    Here, looking at art as a representation of its historical context can clue us in and 
                    fill some gaps. Just before the Impressionist Movement hit its stride, the camera was 
                    invented. Artists began to fear that they would no longer be necessary- after all, why 
                    pay for an expensive portrait when you could just get a photograph? Impressionists like 
                    Monet began to experiment with paint to see how they could depict light, color, and 
                    movement in a way that photographs at the time (and indeed, even today) could not. 
                    Suddenly, Monet’s paintings of shimmering ponds and hazy evenings doesn’t seem like 
                    so much of a mystery anymore.
                </p>
                <p>
                    Perhaps you now understand why Monet painted in the style he did, but you don’t like it. 
                    Which is totally fine! But if the reason you don’t like his art is solely because it 
                    fails to accurately represent real life, I have some bad news for you.
                </p>
                <div className= "blog-image" style={{width: "100%", padding: "5%", float: "right", fontSize: "15px"}}>
                <img src= {require("../../public/static/blog/posts/creation-of-adam-michelangelo.jpg")} 
                style={{width: "100%"}}/>
                <i>The Creation of Adam, Michelangelo</i>
                </div>
                <p>
                    Take the piece above, The Creation of Adam, by Michelangelo. This piece, gorgeous as it is, 
                    is in no way realistic. I can say with near-certainty that Michelangelo never saw this 
                    scene play out before his eyes. It, too, is a representation of its historical context, 
                    signaling the power of the church at the time and the rise of humanism (see the obvious 
                    shape of the brain formed by God’s cape). The piece tells a story, depicting a scene that 
                    could never have been observed by the artist himself.
                </p>
                <p>
                    In this way, all art is an illusion, a trick of the light- which hints at something 
                    underlying which is real. No artist who strives to depict reality as it is will ever 
                    be able to capture every part of the thing he or she is trying to depict. And nowhere was 
                    this clearer than the example of the photograph, where in a literal flash, artists realized 
                    that their work would never be good enough as the real thing.
                </p>
                <p>
                    After the photograph was invented, artists searched for new ways to depict the world around 
                    them. It may be confusing and even frustrating to look at art post-invention-of-the-photograph, 
                    but it is reassuring to know that art will always be a representation of the context in which it 
                    was created, and in which it persists.
                </p>
                <h3>
                    Art as Expression
                </h3>
                <p>
                    If artists couldn’t just depict what they saw, what on earth would they do? Cue, expression. Artists 
                    have long had a love-hate relationship with expression. Depending on the period of time, you’ll find 
                    art which is overtly emotional (see: Romanticism) or art which is rigid and analytical (see: 
                    Neoclassicism). But try as they might, artists could never escape the fact that art, emotional 
                    or analytical, was an expression of the artist.
                </p>
                <div className= "blog-image" style={{width: "300px", padding: "5%", float: "right", fontSize: "15px"}}>
                <img src= {require("../../public/static/blog/posts/scream-munch.jpg")} 
                style={{width: "100%"}}/>
                <i>The Scream, Edvard Munch</i>
                </div>
                <p>
                    Few paintings depict the relationship between expression and art better than Edvard Munch’s The Scream. 
                    The piece is terrifying, even horrendous to look at, and it depicts what many historians theorize 
                    was one of Munch’s psychotic episodes. The bleeding sky and the swirling lines make the piece 
                    sickening to look at, almost making the viewer feel the way Munch must have felt at the time.
                </p>
                <p>
                    Many artists will tell you that art is, in many ways, not a conscious choice. Artists will 
                    have a tendency to approach a project and emerge, hours or days later with a product that 
                    is as much their work as it is the work of their subconscious. Indeed, when I make my own 
                    pieces I can get lost for hours at a time without realizing it. As art became more expressive 
                    into the 20th and 21st century, the artwork displayed in the galleries became more the symptom 
                    than the source. This is precisely why, were I to paint an identical copy of The Scream, 
                    it wouldn’t be nearly as meaningful. The value of the art is in the fact that it was 
                    symptomatic of the art that lies within.
                </p>
                <p>
                    And expression doesn’t necessarily need to be subconscious, either. Artists can consciously insert 
                    symbolism or meaning into their works, provoking thought, or even action. Take the piece Guernica, 
                    by Pablo Picasso. It depicts a brutal scene of trauma and distress, in response to the bombing of 
                    the town of Guernica in Spain.
                </p>
                <div className= "blog-image" style={{width: "100%", padding: "5%", float: "right", fontSize: "15px"}}>
                <img src= {require("../../public/static/blog/posts/guernica-picasso.jpg")} 
                style={{width: "100%"}}/>
                <i>Guernica, Pablo Picasso</i>
                </div>
                <p>
                    Countless critiques have theorized the symbolic representations of each piece of the painting. 
                    Perhaps the lightbulb represents the Sun. The flattening of linear perspective, an intentional 
                    choice to give the viewer access to different perspectives at once. The bull and horse, significant 
                    to Spanish culture, may represent Spain or the wild and animalistic nature of war. But how much of 
                    this symbolism can we credit to Picasso? After all, the man himself said “this bull is a bull 
                    and this horse is a horse.”
                </p>
                <p>
                    How much of artistic expression can we credit to the artist, and how much of it is utter nonsense? 
                    If we are to look at a piece by its expressiveness, how are we to know whether it is thoughtful 
                    expression or just our projections of our own interpretation? This brings us to the third 
                    and final way we will explore looking at art.
                </p>
                <h3>
                    Art as Conversation
                </h3>
                <p>
                    Suppose you were at a cocktail party sipping on your favorite non-alcoholic beverage (you’re the 
                    designated driver, because of course), talking with friends about a topic that appealed 
                    to you. You walk away for a few moments and return, only to find out that your friends have 
                    moved on to a different topic of conversation altogether. Confused and slightly distressed,
                    you conclude that their new conversation is worthless because you don’t understand it. 
                    Is that fair?
                </p>
                <p>
                    This is, I think, a good characterization for where art is today. Contemporary artists, who have 
                    thoroughly studied art history and are caught up on the conversation, are building on the existing 
                    dialogues created by fellow contemporaries, while the common museum-goer is left in the dust. Many 
                    of us left the conversation long ago, somewhere in the Renaissance, and only now are returning to 
                    find that the conversation (the styles, methods, and meanings) surrounding art have radically changed- 
                    an undeniably uncomfortable feeling! While I personally believe that artists can do more to bring 
                    interested audiences up-to-speed with art, I also believe that anyone can use their own tools and 
                    understanding to appreciate art in their own way, as long as they keep an open mind. In this way, 
                    art and art history truly is a conversation.
                </p>
                <p>
                    Let’s return to the question where we left off- if we can’t tell the difference between what the artist 
                    intended and what we see in a painting, how do we know if a piece of art is good?
                </p>
                <p>
                    I think it’s important to get rid of this fixation with the artist’s intent and the 
                    quality of the work the artist produces. After all, I could intend on producing the 
                    next great American novel without succeeding (likely), and I could write a profound 
                    poem on accident (less likely). Still, there’s something a bit unnerving about giving 
                    credit where it doesn’t feel like it was earned, or even intentional.
                </p>
                <p>
                    But perhaps art is more than just the piece, or the artist. Perhaps in viewing the art, 
                    you are, in some way, a part of it too. If art is a conversation, then we must judge art 
                    based on what makes for a worthwhile conversation. If I were chatting with you in the 
                    cocktail party and you said something that reminded me of my childhood, I might consider 
                    the conversation riveting even if you hadn’t intended to make that connection for me. 
                    In this way, art is more than just a one-way-street.
                </p>
                <p>
                    There’s something undeniably special about that which we call art. It is inescapable, 
                    yet at the same time such a confusing concept to grasp. But most pieces have unifying 
                    principles through which they can be understood. If we analyze the context of the art, 
                    not only what it depicts or claims to depict, but also the historical, religious, 
                    scientific, and social movements of the time, we can get a better understanding of 
                    how and why these pieces came to be. If we think about artwork as an expression, a 
                    symptom of the artist, we can better understand where to look for meaning. Finally, 
                    in understanding that art is conversation, we can keep our minds open to new opportunities 
                    and new ways to understand the art, and ourselves.
                </p>
                <p>
                    Not all pieces of art are good. Not all pieces of art in museums are good. But each piece, 
                    each installation, each set was put there by someone, sometime, someplace. Each piece of 
                    art is an open invitation to connect, and possibly even resonate, with something, 
                    and someone, you never knew before.
                </p>
                <h3>
                    Back to the Bucket
                </h3>
                <p>
                    Hopefully this article has helped bring new perspectives with which to engage with art. 
                    I’d like to leave you where we began, two blackboards and a bucket.
                </p>
                <p>
                    As someone who, on a good day, would consider myself an artist (perhaps an art enthusiast), 
                    I find that the blackboards and buckets piece (<i>F.I.U. Blackboards</i>, Joseph Beuys) resonates 
                    with me on a number of levels. The piece, prominently displayed as part of the Hirshhorn’s 
                    exhibit “What Absence is Made of”, is an artist’s take on how to depict nothing.
                </p>
                <p>
                    Think about that for a second. How on earth are you supposed to paint nothing, when the act 
                    of painting, by definition, is something? The piece consists of two planks, each painted black, 
                    and a bucket with a washcloth draped over it. Maybe the artist attempted to paint nothing, but 
                    realizing the futility of the effort, has stormed off in frustration, leaving his bucket behind? 
                    Never mind the bucket’s blatant symbolic connection with death (see: “kick the bucket”, 
                    “bucket list”), perhaps the most frightening incarnation of absence.
                </p>
                <p>
                    Observing this, and other pieces, I was struck by the idea that the concept of absence 
                    had to be created- that in and of itself, the request for a piece about the substance 
                    of absence was something of a paradox. Yet the piece also slyly winks at fellow 
                    artists, indicating at the power of artists to depict the impossible, to create something 
                    that in itself should not, could not ever be created.
                </p>
                <p>
                    I appreciate that piece not because I know the artist intended these things, nor because 
                    I think it depicts a subject photo-realistically, but because for a brief moment I 
                    connected with the piece he had created- I was in on the joke, in on the story, in on 
                    the thread that in some ways I had created myself.
                </p>
                <p>
                    And maybe that’s the art in it. I’ll never know for sure, but intentional or unintentional, 
                    there’s something beautiful about the ability of the human mind to create, to explore, 
                    to express; such that even in the absence of beauty, we can make it, or find it...
                </p>
                <p>
                    Out of nothing at all.
                </p>
            </div>
        </div>
    </div>
    );
  }
}

export default Post_how_to_engage_with_art;
