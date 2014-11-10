<?php

namespace Realtime\Bundle\NotesBundle\Service;

use Doctrine\ORM\EntityManager;
use Realtime\Bundle\NotesBundle\Entity\Notes;
use Symfony\Component\Security\Core\SecurityContext;

class NotesService {

    const NOTES_REPOSITORY_NAME = 'RealtimeBundleNotesBundle:Notes';
    const FAKE_DATA_COUNT = 10;

    private $securityContext;
    /** @var $entityManager EntityManager */
    private $entityManager;

    public function __construct(SecurityContext $securityContext, EntityManager $entityManager) {
        $this->securityContext = $securityContext;
        $this->entityManager = $entityManager;
    }

    public function getNotesList(){
        $i = self::FAKE_DATA_COUNT;
        $notesRepository = [];
        while($i > 0){
            $notesRepository[] = [
                'createdBy' => 'admin'.$i,
                'note' => 'Lorem ipsum...',
                'createdDate' => '2014-09-09 12:12:00',
            ];
        $i--;
        }

//        $notesRepository = $this->entityManager
//            ->getRepository(self::NOTES_REPOSITORY_NAME)
//            ->findAll();
        return $notesRepository;
    }

    public function saveApi($form_data, $param_data, $id = null){

    }


}
