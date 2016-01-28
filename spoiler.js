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
function spoil (spoiler)
{
    var children = getChildren(spoiler);

    for (var i = 1; i < children.length; i++)
    {
        if (children[i].style.display = 'none')
            children[i].style.display = 'block';

        else
            children[i].style.display = 'none';
    }
}

/* Function that initializes the slideshow */
function initSpoilers ()
{
    var spoilers = document.getElementsByClassName('spoiler');

    for (var i = 0; i < spoilers.length; i++)
    {
        var children = getChildren(spoilers[i]);
        children[0].onclick = (function (spoiler) { return (function () { spoil(spoilers); }); }) (spoilers[i]);

        for (var j = 1; j < children.length; j++)
            children[j].style.display = 'none';
    }
}

/* After page load, initialize spoilers */
window.addEventListener('load', initSpoilers);
