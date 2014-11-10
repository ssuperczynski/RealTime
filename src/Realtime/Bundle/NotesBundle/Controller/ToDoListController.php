<?php

namespace Realtime\Bundle\NotesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class ToDoListController extends Controller
{

    const NOTE_SERVICE = 'realtime.note_service';
    const APP_ID = 96028;
    const APP_KEY = 'aeffa086e9b34a265837';
    const APP_SECRET = 'fc5903c8eac6c91b41af';

    public function __construct()
    {
        $this->serializer = new Serializer([new GetSetMethodNormalizer()], [new JsonEncode()]);
    }

    public function indexAction()
    {
        return $this->render('RealtimeNotesBundle:ToDoList:index.html.twig');
    }

    public function getAction()
    {
        $note = $this->get(self::NOTE_SERVICE);
        $jsonContent = $this->serializer->serialize($note->getNotesList(), 'json');
        return new Response($jsonContent);
    }

    public function saveAction()
    {

        $pusher = new Pusher(self::APP_KEY, self::APP_SECRET, self::APP_ID, false, 'https://api.pusherapp.com', 443);
        
        $note = $this->get(self::NOTE_SERVICE);
        //$response = $note->saveApi();
        return new JsonResponse([
            'status' => 'ok',
            'createdBy' => 'ok',
            'createdDate' => 'ok',
            'note' => 'ok',
            'id' => 1//$response->getId()
        ]);
    }

}
