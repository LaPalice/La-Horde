/******************************************************************************/
/*                                                                            */
/*                 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE                */
/*                          Version 2, December 2004                          */
/*                                                                            */
/*  Copyright (C) 2016 Nicolas Jeannerod <niols@niols.fr>                     */
/*                                                                            */
/*  Everyone is permitted to copy and distribute verbatim or modified copies  */
/*  of this license document, and changing it is allowed as long as the name  */
/*  is changed.                                                               */
/*                                                                            */
/*                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE                 */
/*       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION      */
/*                                                                            */
/*  0. You just DO WHAT THE FUCK YOU WANT TO.                                 */
/*                                                                            */
/******************************************************************************/

/**
 * This file finds all the elements with class "slideshow", finds the first
 * child of those elements that have the class "slide-active", remove this
 * class and give it to the next child.
 *
 * Classic use: in CSS, put `display: block` for the class "slide-active" and
 * `display: none` otherwise, and you get a slideshow.
 *
 * By default, the delay is 1s, you can change it by modifying the variable
 * "delay" (time is in milliseconds).
 */

var delay = 1000;


/* Function to test if an element has a given class */
function hasClass(element, clas)
{
    return (' ' + element.className + ' ').indexOf(' ' + clas + ' ') > -1;
}

/* Function to add a class to an element */
function addClass(element, clas)
{
    if (! hasClass(element, clas))
    element.className += ' ' + clas;
}

/* Function to remove a class from an element */
function delClass(element, clas)
{
    element.className = element.className.replace(clas, '').replace('  ', ' ');
}

/* Function to get all the direct children of an element */
function getChildren (element)
{
    var childNodes = element.childNodes;
    var children = [];

    for (i = childNodes.length - 1; i > 0; i--)
        if (childNodes[i].nodeType == 1)
            children.unshift(childNodes[i]);

    return children;
}

/* Function to change to the next slide */
function changeSlide (slideshow)
{
    var slides = getChildren(slideshow);

    for (var i = 0; i < slides.length; i++)
    {
    if (hasClass(slides[i], 'slide-active'))
    {
        delClass(slides[i], 'slide-active');
        addClass(slides[(i + 1) % slides.length], 'slide-active');
        return;
    }
    }
}

/* Function that initializes the slideshow */
function initSlideshows ()
{
    var slideshows = document.getElementsByClassName('slideshow');

    window.setInterval(function () { for (var i = 0; i < slideshows.length; i++)
    changeSlide (slideshows[i]); }, delay);
}

/* After page load, initialize slideshow */
window.addEventListener('load', initSlideshows);
