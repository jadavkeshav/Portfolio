import * as adobeXd from '../src/assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../src/assets/svg/skills/adobeaudition.svg';
import afterEffects from '../src/assets/svg/skills/after-effects.svg';
import angular from '../src/assets/svg/skills/angular.svg';
import aws from '../src/assets/svg/skills/aws.svg';
import azure from '../src/assets/svg/skills/azure.svg';
import blender from '../src/assets/svg/skills/blender.svg';
import bootstrap from '../src/assets/svg/skills/bootstrap.svg';
import bulma from '../src/assets/svg/skills/bulma.svg';
import c from '../src/assets/svg/skills/c.svg';
import canva from '../src/assets/svg/skills/canva.svg';
import capacitorjs from '../src/assets/svg/skills/capacitorjs.svg';
import coffeescript from '../src/assets/svg/skills/coffeescript.svg';
import cplusplus from '../src/assets/svg/skills/cplusplus.svg';
import csharp from '../src/assets/svg/skills/csharp.svg';
import css from '../src/assets/svg/skills/css.svg';
import dart from '../src/assets/svg/skills/dart.svg';
import deno from '../src/assets/svg/skills/deno.svg';
import django from '../src/assets/svg/skills/django.svg';
import docker from '../src/assets/svg/skills/docker.svg';
import fastify from '../src/assets/svg/skills/fastify.svg';
import figma from '../src/assets/svg/skills/figma.svg';
import firebase from '../src/assets/svg/skills/firebase.svg';
import flutter from '../src/assets/svg/skills/flutter.svg';
import gcp from '../src/assets/svg/skills/gcp.svg';
import gimp from '../src/assets/svg/skills/gimp.svg';
import git from '../src/assets/svg/skills/git.svg';
import go from '../src/assets/svg/skills/go.svg';
import graphql from '../src/assets/svg/skills/graphql.svg';
import haxe from '../src/assets/svg/skills/haxe.svg';
import html from '../src/assets/svg/skills/html.svg';
import illustrator from '../src/assets/svg/skills/illustrator.svg';
import ionic from '../src/assets/svg/skills/ionic.svg';
import java from '../src/assets/svg/skills/java.svg';
import javascript from '../src/assets/svg/skills/javascript.svg';
import julia from '../src/assets/svg/skills/julia.svg';
import kotlin from '../src/assets/svg/skills/kotlin.svg';
import lightroom from '../src/assets/svg/skills/lightroom.svg';
import markdown from '../src/assets/svg/skills/markdown.svg';
import materialui from '../src/assets/svg/skills/materialui.svg';
import matlab from '../src/assets/svg/skills/matlab.svg';
import memsql from '../src/assets/svg/skills/memsql.svg';
import microsoftoffice from '../src/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../src/assets/svg/skills/mongoDB.svg';
import mysql from '../src/assets/svg/skills/mysql.svg';
import nextJS from '../src/assets/svg/skills/nextJS.svg';
import nginx from '../src/assets/svg/skills/nginx.svg';
import numpy from '../src/assets/svg/skills/numpy.svg';
import nuxtJS from '../src/assets/svg/skills/nuxtJS.svg';
import opencv from '../src/assets/svg/skills/opencv.svg';
import photoshop from '../src/assets/svg/skills/photoshop.svg';
import php from '../src/assets/svg/skills/php.svg';
import picsart from '../src/assets/svg/skills/picsart.svg';
import postgresql from '../src/assets/svg/skills/postgresql.svg';
import premierepro from '../src/assets/svg/skills/premierepro.svg';
import python from '../src/assets/svg/skills/python.svg';
import pytorch from '../src/assets/svg/skills/pytorch.svg';
import react from '../src/assets/svg/skills/react.svg';
import ruby from '../src/assets/svg/skills/ruby.svg';
import selenium from '../src/assets/svg/skills/selenium.svg';
import sketch from '../src/assets/svg/skills/sketch.svg';
import strapi from '../src/assets/svg/skills/strapi.svg';
import svelte from '../src/assets/svg/skills/svelte.svg';
import swift from '../src/assets/svg/skills/swift.svg';
import tailwind from '../src/assets/svg/skills/tailwind.svg';
import tensorflow from '../src/assets/svg/skills/tensorflow.svg';
import typescript from '../src/assets/svg/skills/typescript.svg';
import unity from '../src/assets/svg/skills/unity.svg';
import vitejs from '../src/assets/svg/skills/vitejs.svg';
import vue from '../src/assets/svg/skills/vue.svg';
import vuetifyjs from '../src/assets/svg/skills/vuetifyjs.svg';
import webix from '../src/assets/svg/skills/webix.svg';
import wolframalpha from '../src/assets/svg/skills/wolframalpha.svg';
import wordpress from '../src/assets/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}
