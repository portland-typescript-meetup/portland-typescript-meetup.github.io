---
layout: page
title: Blog Archive
permalink: /blog/
path: blog.md
---

<div class="blogEntries no-padding">
    {% if site.posts.size > 0 %}
    {% for post in site.posts %}
    <div class="post-group">
        <h3 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <span class="post-meta">
            {% include post-meta.html page=post %}
        </span>
        {% if post.summary %}
        <p class="post-summary">{{ post.summary }}</p>
        {% endif %}
    </div>
    {% endfor %}
    {% else %}
    <h3>No Posts</h3>
    {% endif %}
</div>