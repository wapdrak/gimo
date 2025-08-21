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
      "tel"=>null
      );
    return true;
  }

 
  function build() {
    $this->log .= "txt build() called<br />";
    
    if ($this->data['tel']) { $this->card .= "".$this->data['tel'].""; }
   
  }
  

  function download() {
    $this->log .= "txt download() called<br />";
    if (!$this->card) { $this->build(); }
    if (!$this->filename) { $this->filename = trim($this->data['display']); }
    $this->filename = str_replace(" ", "_", $this->filename);
  	header("Location: tel:".$this);
  	echo $this->card;
    return true;
  }
}