<?php
class txt {
  var $log;
  var $data;  //array of this vcard's contact data
  var $filename; //filename for download file naming
  var $datum;
  var $card;
  

  function txt() {
    $this->log = "New txt() called<br />";
    $this->data = array(
      "nazev"=>null
      ,"poznamka"=>null
      ,"display"=>null
      ,"text"=>null
      );
    return true;
  }

 
  function build() {
    $this->log .= "txt build() called<br />";

    if (!$this->data['display']) {
      $this->data['display'] = trim($this->data['nazev']." ".$this->data['poznamka']);
    }
    
    if ($this->data['text']) { $this->card .= "".$this->data['text'].""; }
   
  }
  

  function download() {
    $this->log .= "txt download() called<br />";
    if (!$this->card) { $this->build(); }
    if (!$this->filename) { $this->filename = trim($this->data['display']); }
    $this->filename = str_replace(" ", "_", $this->filename);
  	header("Content-type: text/plain");
  	header("Content-Disposition: attachment; filename=".$this->filename.".txt");
  	header("Pragma: public");
  	echo $this->card;
    return true;
  }
}