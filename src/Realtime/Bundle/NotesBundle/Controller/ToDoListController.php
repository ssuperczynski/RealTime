<?php

namespace Realtime\Bundle\NotesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class ToDoListController extends Controller
{

    public function indexAction($name)
    {
        return $this->render('RealtimeNotesBundle:Default:index.html.twig', array('name' => $name));
    }

}
