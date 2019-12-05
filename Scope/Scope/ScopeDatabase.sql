-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: Scope
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Course`
--

DROP TABLE IF EXISTS `Course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Course` (
  `course_id` varchar(10) NOT NULL,
  `course_name` varchar(40) NOT NULL,
  `course_section` varchar(2) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
INSERT INTO `Course` VALUES ('278917254','CS157A','01','2018-08-21','2019-12-09'),('299655012','CS166','01','2018-08-21','2019-12-09'),('426383441','CS159','01','2018-08-21','2019-12-09'),('55116348','CS149','01','2018-01-24','2019-05-13'),('562182226','CMPE172','01','2018-01-24','2019-05-13'),('567291101','CS134','01','2013-08-21','2014-12-09'),('593726155','CS152','01','2014-01-24','2015-05-13'),('624040817','CMPE131','01','2018-01-24','2019-05-13'),('629866888','CS146','01','2018-08-21','2019-12-09'),('760306549','CMPE165','02','2017-08-21','2018-12-09'),('868029873','ENGR195A','01','2018-01-24','2019-05-13'),('878839432','CMPE102','01','2018-08-21','2019-12-09'),('927885960','CMPE165','01','2015-08-21','2016-12-09'),('996841846','ISE164','01','2018-08-21','2019-12-09'),('997503965','CMPE187','01','2018-01-24','2019-05-13');
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CourseHasProjects`
--

DROP TABLE IF EXISTS `CourseHasProjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CourseHasProjects` (
  `course_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CourseHasProjects`
--

LOCK TABLES `CourseHasProjects` WRITE;
/*!40000 ALTER TABLE `CourseHasProjects` DISABLE KEYS */;
INSERT INTO `CourseHasProjects` VALUES (278917254,1),(278917254,2),(278917254,3),(299655012,4),(426383441,6),(426383441,7),(55116348,8),(55116348,9),(55116348,10),(55116348,11),(55116348,12),(55116348,13),(55116348,14);
/*!40000 ALTER TABLE `CourseHasProjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Instructor`
--

DROP TABLE IF EXISTS `Instructor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Instructor` (
  `instructor_id` varchar(10) NOT NULL,
  `inst_user_name` varchar(40) NOT NULL,
  `inst_frist_name` varchar(40) NOT NULL,
  `inst_last_name` varchar(40) NOT NULL,
  `inst_email` varchar(40) NOT NULL,
  `inst_password` varchar(40) NOT NULL,
  PRIMARY KEY (`instructor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instructor`
--

LOCK TABLES `Instructor` WRITE;
/*!40000 ALTER TABLE `Instructor` DISABLE KEYS */;
INSERT INTO `Instructor` VALUES ('0114695369','njouhandeaud','Neils','Jouhandeau','njouhandeaud@i2i.jp','J6oGQj'),('0309009278','mochterlonie0','Maggi','Ochterlonie','mochterlonie0@telegraph.co.uk','NOgnKTfu'),('0689609795','hdyment2','Hewet','Dyment','hdyment2@blinklist.com','J9jv6yDkICIj'),('1772592293','mjerredb','Maxie','Jerred','mjerredb@stanford.edu','zvTaAkL'),('1878210823','lhasteda','Lynnea','Hasted','lhasteda@xinhuanet.com','xwnSYm'),('2389592635','fclilverd4','Flin','Clilverd','fclilverd4@ucoz.com','9AoOM7k'),('3547539625','mstacey5','Morrie','Stacey','mstacey5@hexun.com','att7jlpcV'),('3726186581','gcheasmanc','Gayler','Cheasman','gcheasmanc@dedecms.com','fVLsuqH5rD'),('3876648211','gpfaff6','Germain','Pfaff','gpfaff6@example.com','UStoXF0QAuF'),('4003367340','acaddick1','Augustine','Caddick','acaddick1@quantcast.com','DQKfRK'),('5169573901','rgoodboddy3','Roby','Goodboddy','rgoodboddy3@edublogs.org','074VYS3OMz'),('5455054880','ariddiforde','Adina','Riddiford','ariddiforde@examiner.com','cQQxKonl'),('5510108053','jpavelka9','Jarvis','Pavelka','jpavelka9@freewebs.com','GoT5Aw'),('7691982879','dwoollacott7','Dorri','Woollacott','dwoollacott7@reverbnation.com','3xtgkqoHwjD'),('8191688182','sgerbi8','Sarge','Gerbi','sgerbi8@gmpg.org','BFZnC8Z3r');
/*!40000 ALTER TABLE `Instructor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `InstructorTeachCourses`
--

DROP TABLE IF EXISTS `InstructorTeachCourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `InstructorTeachCourses` (
  `instructor_id` varchar(10) NOT NULL,
  `course_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `InstructorTeachCourses`
--

LOCK TABLES `InstructorTeachCourses` WRITE;
/*!40000 ALTER TABLE `InstructorTeachCourses` DISABLE KEYS */;
INSERT INTO `InstructorTeachCourses` VALUES ('0114695369','278917254'),('0309009278','278917254'),('0689609795','278917254'),('1772592293','278917254'),('1878210823','278917254'),('2389592635','278917254'),('3547539625','278917254'),('3726186581','278917254'),('3876648211','278917254'),('4003367340','278917254'),('5169573901','278917254'),('5455054880','278917254'),('5510108053','278917254'),('7691982879','278917254'),('8191688182','278917254'),('0114695369','299655012'),('0309009278','299655012'),('0689609795','299655012'),('1772592293','299655012'),('1878210823','299655012'),('2389592635','299655012'),('3547539625','299655012'),('3726186581','299655012'),('3876648211','299655012'),('4003367340','299655012'),('5169573901','299655012'),('5455054880','299655012'),('5510108053','299655012'),('7691982879','299655012'),('8191688182','299655012'),('0114695369','426383441'),('0309009278','426383441'),('0689609795','426383441'),('1772592293','426383441'),('1878210823','426383441'),('2389592635','426383441'),('3547539625','426383441'),('3726186581','426383441'),('3876648211','426383441'),('4003367340','426383441'),('5169573901','426383441'),('5455054880','426383441'),('5510108053','426383441'),('7691982879','426383441'),('8191688182','426383441'),('0114695369','55116348'),('0309009278','55116348'),('0689609795','55116348'),('1772592293','55116348'),('1878210823','55116348'),('2389592635','55116348'),('3547539625','55116348'),('3726186581','55116348'),('3876648211','55116348'),('4003367340','55116348'),('5169573901','55116348'),('5455054880','55116348'),('5510108053','55116348'),('7691982879','55116348'),('8191688182','55116348'),('0114695369','562182226'),('0309009278','562182226'),('0689609795','562182226'),('1772592293','562182226'),('1878210823','562182226'),('2389592635','562182226'),('3547539625','562182226'),('3726186581','562182226'),('3876648211','562182226'),('4003367340','562182226'),('5169573901','562182226'),('5455054880','562182226'),('5510108053','562182226'),('7691982879','562182226'),('8191688182','562182226'),('0114695369','567291101'),('0309009278','567291101'),('0689609795','567291101'),('1772592293','567291101'),('1878210823','567291101'),('2389592635','567291101'),('3547539625','567291101'),('3726186581','567291101'),('3876648211','567291101'),('4003367340','567291101'),('5169573901','567291101'),('5455054880','567291101'),('5510108053','567291101'),('7691982879','567291101'),('8191688182','567291101'),('0114695369','593726155'),('0309009278','593726155'),('0689609795','593726155'),('1772592293','593726155'),('1878210823','593726155'),('2389592635','593726155'),('3547539625','593726155'),('3726186581','593726155'),('3876648211','593726155'),('4003367340','593726155'),('5169573901','593726155'),('5455054880','593726155'),('5510108053','593726155'),('7691982879','593726155'),('8191688182','593726155'),('0114695369','624040817'),('0309009278','624040817'),('0689609795','624040817'),('1772592293','624040817'),('1878210823','624040817'),('2389592635','624040817'),('3547539625','624040817'),('3726186581','624040817'),('3876648211','624040817'),('4003367340','624040817'),('5169573901','624040817'),('5455054880','624040817'),('5510108053','624040817'),('7691982879','624040817'),('8191688182','624040817'),('0114695369','629866888'),('0309009278','629866888'),('0689609795','629866888'),('1772592293','629866888'),('1878210823','629866888'),('2389592635','629866888'),('3547539625','629866888'),('3726186581','629866888'),('3876648211','629866888'),('4003367340','629866888'),('5169573901','629866888'),('5455054880','629866888'),('5510108053','629866888'),('7691982879','629866888'),('8191688182','629866888'),('0114695369','760306549'),('0309009278','760306549'),('0689609795','760306549'),('1772592293','760306549'),('1878210823','760306549'),('2389592635','760306549'),('3547539625','760306549'),('3726186581','760306549'),('3876648211','760306549'),('4003367340','760306549'),('5169573901','760306549'),('5455054880','760306549'),('5510108053','760306549'),('7691982879','760306549'),('8191688182','760306549'),('0114695369','868029873'),('0309009278','868029873'),('0689609795','868029873'),('1772592293','868029873'),('1878210823','868029873'),('2389592635','868029873'),('3547539625','868029873'),('3726186581','868029873'),('3876648211','868029873'),('4003367340','868029873'),('5169573901','868029873'),('5455054880','868029873'),('5510108053','868029873'),('7691982879','868029873'),('8191688182','868029873'),('0114695369','878839432'),('0309009278','878839432'),('0689609795','878839432'),('1772592293','878839432'),('1878210823','878839432'),('2389592635','878839432'),('3547539625','878839432'),('3726186581','878839432'),('3876648211','878839432'),('4003367340','878839432'),('5169573901','878839432'),('5455054880','878839432'),('5510108053','878839432'),('7691982879','878839432'),('8191688182','878839432'),('0114695369','927885960'),('0309009278','927885960'),('0689609795','927885960'),('1772592293','927885960'),('1878210823','927885960'),('2389592635','927885960'),('3547539625','927885960'),('3726186581','927885960'),('3876648211','927885960'),('4003367340','927885960'),('5169573901','927885960'),('5455054880','927885960'),('5510108053','927885960'),('7691982879','927885960'),('8191688182','927885960'),('0114695369','996841846'),('0309009278','996841846'),('0689609795','996841846'),('1772592293','996841846'),('1878210823','996841846'),('2389592635','996841846'),('3547539625','996841846'),('3726186581','996841846'),('3876648211','996841846'),('4003367340','996841846'),('5169573901','996841846'),('5455054880','996841846'),('5510108053','996841846'),('7691982879','996841846'),('8191688182','996841846'),('0114695369','997503965'),('0309009278','997503965'),('0689609795','997503965'),('1772592293','997503965'),('1878210823','997503965'),('2389592635','997503965'),('3547539625','997503965'),('3726186581','997503965'),('3876648211','997503965'),('4003367340','997503965'),('5169573901','997503965'),('5455054880','997503965'),('5510108053','997503965'),('7691982879','997503965'),('8191688182','997503965');
/*!40000 ALTER TABLE `InstructorTeachCourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MilestoneHasReviews`
--

DROP TABLE IF EXISTS `MilestoneHasReviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MilestoneHasReviews` (
  `milestone_number` int(11) NOT NULL,
  `review_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MilestoneHasReviews`
--

LOCK TABLES `MilestoneHasReviews` WRITE;
/*!40000 ALTER TABLE `MilestoneHasReviews` DISABLE KEYS */;
INSERT INTO `MilestoneHasReviews` VALUES (1,12),(2,2),(3,4),(4,5),(5,10),(6,9),(7,15),(8,3),(9,11),(10,11),(11,1),(12,4),(13,7),(14,6),(15,8);
/*!40000 ALTER TABLE `MilestoneHasReviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Milestones`
--

DROP TABLE IF EXISTS `Milestones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Milestones` (
  `milestone_number` int(11) NOT NULL AUTO_INCREMENT,
  `milestone_title` varchar(40) NOT NULL,
  `milestone_description` text NOT NULL,
  PRIMARY KEY (`milestone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Milestones`
--

LOCK TABLES `Milestones` WRITE;
/*!40000 ALTER TABLE `Milestones` DISABLE KEYS */;
INSERT INTO `Milestones` VALUES (1,'Project Proposal','Propose a Three-tier Database Application and it must be approved by instructornEach team must submit a document of 2-3 pages narrative (not including the cover page), detailing the preliminary analysis for the application, including its basic requirements.  nThe narrative should focus on application functionalities rather than implementation details.'),(2,'Project Design','Each team must submit an ER Model for the application.nBased onyourproject functional requirements: ØIdentify the entities, attributes, dependences, relationships, constraints, etc.ØShow ISA, multi-way relationship weak entity sets, etc. that apply to your design.ØExplanation for each entity set and relationship, write a short description in plain English of what it represents or models. One or two sentences per entity set and relationship is enough. These descriptions are primarily to help understand what you are modeling.'),(3,'Project Final Report','•Identifykey features of web-basedapplication area for which database systems may prove beneficial, •Determine the functionalities of the database application, •Model the data stored in the database (Identify the entities, roles, relationships, constraints, etc.), •Design, normalize, and perfect the relational database schema,'),(4,'Milestone_Title_04','Quisque in tincidunt augue. Sed ullamcorper tellus diam, ac pretium risus blandit quis. Maecenas magna mauris, vestibulum eu justo et, sodales euismod mi. Quisque tristique hendrerit lacus. Nulla sodales lectus at nibh maximus sodales. Donec vitae turpis mauris. Ut ultricies accumsan tortor, vehicula convallis ex pellentesque ut.'),(5,'Milestone_Title_05','Vivamus sit amet arcu gravida, suscipit velit quis, venenatis ante. Ut posuere sit amet leo eget rhoncus. Nunc sollicitudin ante sed commodo dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce in blandit urna, a congue neque. Nullam molestie dui eu venenatis convallis. Suspendisse diam elit, tristique id nunc quis, consequat eleifend quam. Nam aliquet libero in lobortis sodales. Pellentesque ut augue ultricies, tempor diam hendrerit, tristique dui. Cras facilisis, mauris ut rhoncus malesuada, augue purus vulputate massa, eleifend luctus velit enim ac massa. Morbi accumsan elementum purus, id lacinia ante.'),(6,'Milestone_Title_06','Sed libero nibh, iaculis eget turpis vitae, interdum efficitur dolor. Sed sit amet diam sit amet mauris convallis semper. Suspendisse vel ultrices diam. Quisque nec tincidunt nisl. Morbi ut lorem vitae est sagittis ultricies sit amet sed tellus. Nunc fringilla odio eu scelerisque semper. Etiam non feugiat justo, posuere varius est. Proin lectus enim, auctor ut varius eu, fringilla sed enim. Sed ullamcorper dolor ac hendrerit sollicitudin. Curabitur interdum enim id congue aliquam. Praesent mi nulla, iaculis eu vestibulum sed, aliquam sit amet diam. Sed rutrum interdum magna id vehicula.'),(7,'Milestone_Title_07','Proin dictum nibh id posuere convallis. Donec pellentesque id mi ut elementum. Suspendisse potenti. In dictum, justo in volutpat vestibulum, lacus nisl pharetra metus, at ullamcorper diam sapien et neque. Curabitur eget volutpat nisi. Sed in est id nulla aliquam consectetur quis sed ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.'),(8,'Milestone_Title_08','Mauris eget dolor imperdiet massa vehicula pharetra. Donec id turpis elit. Duis vestibulum, augue id consequat eleifend, lectus elit semper libero, mattis sollicitudin metus velit vel nisl. Aenean dapibus dolor leo, quis cursus eros auctor nec. Duis dapibus magna et mauris gravida mollis. Ut luctus non nunc in finibus. In ullamcorper interdum justo, in fermentum nulla facilisis sed. Etiam bibendum consectetur velit non ullamcorper. Praesent libero nibh, elementum sit amet consectetur ac, rutrum a tellus. Morbi consequat augue massa. In laoreet mi ligula, quis sagittis urna iaculis at. Praesent bibendum enim ligula, semper iaculis tellus fringilla ut. Nullam in lobortis eros, in eleifend mauris. Nunc lobortis ut felis vitae pulvinar. Sed laoreet orci id ultricies efficitur.'),(9,'Milestone_Title_09','Pellentesque rutrum justo metus, ac venenatis leo mattis at. Duis sem mauris, venenatis nec libero a, vulputate fermentum felis. Pellentesque convallis sollicitudin felis, ac elementum est gravida ut. Nullam pellentesque, leo sit amet tempor venenatis, tellus ante laoreet ante, vitae pellentesque ipsum odio a augue. Aenean sed velit dignissim, sodales massa in, ullamcorper ex. Nullam at ultricies ex, quis elementum sem. Donec laoreet sollicitudin turpis a facilisis. Donec ut lobortis leo. Ut mi dui, dictum id augue eu, accumsan sagittis turpis.'),(10,'Milestone_Title_10','In hac habitasse platea dictumst. Etiam non pulvinar orci. Aenean vehicula dui ac velit cursus bibendum. Quisque enim tellus, suscipit non dui porttitor, laoreet molestie magna. Etiam id efficitur massa. Praesent lorem est, vestibulum et libero in, tristique laoreet neque. Duis nec nulla non lacus blandit congue. Nam pulvinar sodales metus, tincidunt lobortis justo pharetra vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in tincidunt elit, et ullamcorper ante. Nulla dictum bibendum mattis. Nam rutrum dapibus faucibus. Quisque viverra eros dolor, at laoreet risus dictum quis. Maecenas sagittis venenatis odio et rutrum. Duis ultricies, turpis non euismod fringilla, orci quam mollis neque, vel luctus odio odio sed orci.'),(11,'Milestone_Title_11','Integer quis nisi ac enim maximus fringilla vel id tellus. Donec luctus sapien ac maximus dapibus. Aenean tincidunt nulla in lorem pellentesque aliquam. Nullam molestie ex ac eros maximus semper. Nunc non euismod leo, vel cursus nisl. Suspendisse aliquet nec massa a efficitur. Donec ornare vitae nisi eget commodo.'),(12,'Milestone_Title_12','Duis eget est vel turpis aliquam ullamcorper. Morbi nec augue imperdiet felis laoreet eleifend. Curabitur et purus arcu. Cras commodo quam vitae nisi placerat, sed suscipit massa consectetur. Phasellus sit amet pharetra lorem, sed tincidunt metus. Nam turpis felis, ultrices nec convallis rhoncus, commodo a est. Quisque sit amet euismod odio.'),(13,'Milestone_Title_13','Cras at nibh tristique felis pretium aliquet vitae eget quam. Nullam nec leo vel elit feugiat mollis. Vivamus iaculis neque et aliquam facilisis. Aenean sed metus leo. Sed rhoncus leo eget est viverra, nec elementum turpis vestibulum. In gravida efficitur varius. Duis suscipit metus eu orci eleifend gravida. Sed orci massa, congue non enim quis, tristique tempus purus. Donec facilisis nunc vel eros elementum, quis commodo justo hendrerit. Etiam ut urna quis nisl tincidunt consequat eget sed turpis. Suspendisse odio est, eleifend suscipit vestibulum eget, iaculis iaculis metus. In hac habitasse platea dictumst.'),(14,'Milestone_Title_14','Pellentesque fringilla, est et porta rutrum, ipsum augue facilisis dolor, lobortis facilisis erat tellus a ante. Nam commodo metus vitae nunc gravida, id convallis sem vehicula. Integer ut varius arcu, sed fringilla neque. Sed imperdiet venenatis erat id ultricies. Ut sem diam, sagittis eget arcu et, posuere varius odio. Nam et purus non est vulputate blandit id in ex. Integer vitae lorem pharetra, posuere diam eu, volutpat magna. Mauris consequat urna et laoreet accumsan. Nullam at libero nec ex cursus lobortis. Nam nec leo euismod, aliquet nibh lobortis, ullamcorper nibh.'),(15,'Milestone_Title_15','Sed sodales urna in libero pellentesque suscipit. Donec faucibus, lectus facilisis mattis porta, ipsum magna eleifend neque, vel sagittis justo neque ac ipsum. Ut pulvinar commodo tellus, sit amet venenatis odio placerat eu. Sed laoreet nunc congue turpis dictum, in consectetur neque rhoncus. Cras consequat nisi vel tempus porttitor. Vivamus nec cursus sem. Curabitur eleifend justo sit amet ligula pellentesque consequat. Vestibulum quis nisi nec lorem scelerisque porttitor non at ipsum. Sed dignissim eu nulla in maximus. Duis vitae scelerisque enim, id efficitur augue. Cras ut facilisis arcu.');
/*!40000 ALTER TABLE `Milestones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Project`
--

DROP TABLE IF EXISTS `Project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Project` (
  `project_id` int(10) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(60) NOT NULL,
  `project_description` text NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Project`
--

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */;
INSERT INTO `Project` VALUES (1,'Three Tier Architecture Application','In this project, youwill apply concepts presented in class and obtain practical,hands-on experience.Students, in randomly-selected, 3-member teams, will design and implement small database applications.  A three-tiered architecture of DBMS application will be designed and implemented as a term project for this course. Team may choose any applications that are appropriate in size and complexity.  '),(2,'Online Diagnostic Lab Reporting System','Nullam sed metus molestie, laoreet ex ut, pellentesque sem. Praesent et aliquet dolor. Suspendisse pharetra purus sed risus facilisis, quis ornare nisi rhoncus. Cras auctor, nulla non pretium euismod, enim massa vestibulum eros, et rhoncus augue velit nec augue. Donec sed tristique odio. Cras efficitur erat quis placerat porta. Phasellus ullamcorper, ipsum ac sollicitudin pulvinar, felis ipsum vulputate libero, vel convallis odio turpis vel ligula. Nulla condimentum pellentesque lectus, vel maximus enim maximus ut. Sed faucibus dui neque, id efficitur dolor tristique eget. Proin lacinia, augue ut tincidunt pellentesque, eros massa lobortis est, et fringilla quam nisi vel erat. In tristique est ut leo bibendum, vel efficitur metus semper.'),(3,'Online tuition management system','Donec in mi et lorem luctus dictum nec at odio. Proin ac metus lobortis, cursus nibh at, congue lacus. Etiam eget nunc vel turpis mattis lacinia. Cras placerat eu nisi porta tincidunt. Morbi ac auctor nisi, non aliquet leo. Vivamus non velit nec purus lobortis semper. Proin id massa erat. Mauris bibendum neque eget elit tincidunt aliquam. Quisque eu enim ipsum. Curabitur porttitor finibus orci eget ultricies. Nullam dictum faucibus feugiat. In ut sodales nisi, sit amet pulvinar sapien.'),(4,'Voice and speech based browser','Nullam sed metus molestie, laoreet ex ut, pellentesque sem. Praesent et aliquet dolor. Suspendisse pharetra purus sed risus facilisis, quis ornare nisi rhoncus. Cras auctor, nulla non pretium euismod, enim massa vestibulum eros, et rhoncus augue velit nec augue. Donec sed tristique odio. Cras efficitur erat quis placerat porta. Phasellus ullamcorper, ipsum ac sollicitudin pulvinar, felis ipsum vulputate libero, vel convallis odio turpis vel ligula. Nulla condimentum pellentesque lectus, vel maximus enim maximus ut. Sed faucibus dui neque, id efficitur dolor tristique eget. Proin lacinia, augue ut tincidunt pellentesque, eros massa lobortis est, et fringilla quam nisi vel erat. In tristique est ut leo bibendum, vel efficitur metus semper.'),(6,'Inventory management for android','Donec in mi et lorem luctus dictum nec at odio. Proin ac metus lobortis, cursus nibh at, congue lacus. Etiam eget nunc vel turpis mattis lacinia. Cras placerat eu nisi porta tincidunt. Morbi ac auctor nisi, non aliquet leo. Vivamus non velit nec purus lobortis semper. Proin id massa erat. Mauris bibendum neque eget elit tincidunt aliquam. Quisque eu enim ipsum. Curabitur porttitor finibus orci eget ultricies. Nullam dictum faucibus feugiat. In ut sodales nisi, sit amet pulvinar sapien.'),(7,'Character recognition system','Donec in mi et lorem luctus dictum nec at odio. Proin ac metus lobortis, cursus nibh at, congue lacus. Etiam eget nunc vel turpis mattis lacinia. Cras placerat eu nisi porta tincidunt. Morbi ac auctor nisi, non aliquet leo. Vivamus non velit nec purus lobortis semper. Proin id massa erat. Mauris bibendum neque eget elit tincidunt aliquam. Quisque eu enim ipsum. Curabitur porttitor finibus orci eget ultricies. Nullam dictum faucibus feugiat. In ut sodales nisi, sit amet pulvinar sapien.'),(8,'Emergency Call System in Android','Donec in mi et lorem luctus dictum nec at odio. Proin ac metus lobortis, cursus nibh at, congue lacus. Etiam eget nunc vel turpis mattis lacinia. Cras placerat eu nisi porta tincidunt. Morbi ac auctor nisi, non aliquet leo. Vivamus non velit nec purus lobortis semper. Proin id massa erat. Mauris bibendum neque eget elit tincidunt aliquam. Quisque eu enim ipsum. Curabitur porttitor finibus orci eget ultricies. Nullam dictum faucibus feugiat. In ut sodales nisi, sit amet pulvinar sapien.'),(9,'Bluetooth based attendance system','Donec in mi et lorem luctus dictum nec at odio. Proin ac metus lobortis, cursus nibh at, congue lacus. Etiam eget nunc vel turpis mattis lacinia. Cras placerat eu nisi porta tincidunt. Morbi ac auctor nisi, non aliquet leo. Vivamus non velit nec purus lobortis semper. Proin id massa erat. Mauris bibendum neque eget elit tincidunt aliquam. Quisque eu enim ipsum. Curabitur porttitor finibus orci eget ultricies. Nullam dictum faucibus feugiat. In ut sodales nisi, sit amet pulvinar sapien.'),(10,'Automated DAL generator in Java','Donec in mi et lorem luctus dictum nec at odio. Proin ac metus lobortis, cursus nibh at, congue lacus. Etiam eget nunc vel turpis mattis lacinia. Cras placerat eu nisi porta tincidunt. Morbi ac auctor nisi, non aliquet leo. Vivamus non velit nec purus lobortis semper. Proin id massa erat. Mauris bibendum neque eget elit tincidunt aliquam. Quisque eu enim ipsum. Curabitur porttitor finibus orci eget ultricies. Nullam dictum faucibus feugiat. In ut sodales nisi, sit amet pulvinar sapien.'),(11,'Online appointment system','Integer sed velit fermentum metus sodales luctus sed vel magna. Proin a iaculis velit. Cras id leo libero. Aliquam erat volutpat. Etiam ornare neque odio, ut ultricies nisl semper nec. Nunc rutrum, lectus porttitor consectetur sollicitudin, felis libero fringilla urna, quis iaculis justo elit sed quam. Pellentesque laoreet elit ligula, a cursus ante mollis a. Vivamus eu dui a purus venenatis ornare ut eu magna. Aenean suscipit tincidunt pretium. Phasellus tempor gravida odio sit amet cursus. Maecenas placerat ante nisl, ac imperdiet leo pretium consequat. Vestibulum eget lacus eu sem interdum laoreet non quis libero. Mauris sed urna velit. Etiam non ipsum faucibus, suscipit turpis a, molestie felis.'),(12,'Medical Order sheet for android','Contusion and laceration of left cerebrum with loss of consciousness of 31 minutes to 59 minutes, initial encounter'),(13,'Help Desk','Toxic effect of other corrosive organic compounds, accidental (unintentional), sequela'),(14,'Financial Calculator for android','Nulla a scelerisque orci. Aliquam erat volutpat. Phasellus gravida in urna at hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at lobortis velit. Integer libero sapien, scelerisque ac fermentum quis, posuere vel nisi. Vivamus feugiat urna ipsum, sed molestie nibh sagittis id. Nullam molestie tincidunt dui ut rutrum. Suspendisse lacus felis, consectetur quis gravida nec, maximus eu eros. Pellentesque condimentum erat massa, id auctor nulla faucibus at. Nunc a dignissim mi. Cras sodales faucibus diam quis luctus. Vestibulum fringilla luctus odio, vel porttitor massa ornare nec. Phasellus mollis lectus eget sagittis maximus. Vivamus tincidunt elit neque, sed fringilla neque euismod sed. Donec nunc felis, efficitur a consectetur sed, tincidunt tempor nulla.'),(15,'Barcode reader with android device','Nulla a scelerisque orci. Aliquam erat volutpat. Phasellus gravida in urna at hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut at lobortis velit. Integer libero sapien, scelerisque ac fermentum quis, posuere vel nisi. Vivamus feugiat urna ipsum, sed molestie nibh sagittis id. Nullam molestie tincidunt dui ut rutrum. Suspendisse lacus felis, consectetur quis gravida nec, maximus eu eros. Pellentesque condimentum erat massa, id auctor nulla faucibus at. Nunc a dignissim mi. Cras sodales faucibus diam quis luctus. Vestibulum fringilla luctus odio, vel porttitor massa ornare nec. Phasellus mollis lectus eget sagittis maximus. Vivamus tincidunt elit neque, sed fringilla neque euismod sed. Donec nunc felis, efficitur a consectetur sed, tincidunt tempor nulla.');
/*!40000 ALTER TABLE `Project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProjectHasMilestones`
--

DROP TABLE IF EXISTS `ProjectHasMilestones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProjectHasMilestones` (
  `project_id` int(10) NOT NULL,
  `milestone_number` int(10) NOT NULL,
  PRIMARY KEY (`project_id`,`milestone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProjectHasMilestones`
--

LOCK TABLES `ProjectHasMilestones` WRITE;
/*!40000 ALTER TABLE `ProjectHasMilestones` DISABLE KEYS */;
INSERT INTO `ProjectHasMilestones` VALUES (1,1),(1,2),(1,3),(2,4),(2,5),(2,6),(2,7),(3,8),(3,9),(4,10),(4,11),(4,12),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15);
/*!40000 ALTER TABLE `ProjectHasMilestones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `milestone_number` int(11) NOT NULL,
  `reviewer` int(11) NOT NULL,
  `reviewee` int(11) NOT NULL,
  `rating` int(1) DEFAULT NULL,
  `review_description` text,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
INSERT INTO `Reviews` VALUES (1,1,106996496,169135057,1,'The meetings Timothy leads often run beyond their scheduled time. Over the next year, Timothy needs to make sure that his meetings begin and end on time.'),(2,1,169135057,169135057,2,'Larry is in need of working on his ability to cooperate with fellow co-workers. There have been several situations over the last year where Larry has not cooperated with his co-workers and resulted in a substantial loss in productivity for his work group.'),(3,1,217021555,169135057,3,'Jim continues to be a valued member of our crew and is a person we are able to count on. Jim\'s focus to his attendance and punctuality has made our core group operate significantly better over the past 12 months.\nJim continues to be a valued member of our crew and is a person we are able to count on. Jim\'s focus to his attendance and punctuality has made our core group operate significantly better over the past 12 months.\nJim continues to be a valued member of our crew and is a person we are able to count on. Jim\'s focus to his attendance and punctuality has made our core group operate significantly better over the past 12 months.'),(4,2,106996496,169135057,1,'Heather does not show up for work on time nor does she work a normal work schedule.'),(5,2,169135057,169135057,2,'Tim is extremely dependable with regard to his attendance and regularly exhibits punctuality.'),(6,2,217021555,169135057,3,'Kevin has had several shouting episodes with his supervisor over the last review period. Kevin needs to improve his communication skills and negate the yelling immediately.'),(7,3,106996496,169135057,0,NULL),(8,3,169135057,169135057,2,'Janet starts every day refreshed and ready for any problems she may face throughout the work day.'),(9,3,217021555,169135057,3,'Matt is clearly a \"people person\" that always communicates to his clients how much he enjoys working with them.'),(10,1,217021555,106996496,1,'Jim\'s team has vastly improved their overall performance over the last year due to his positive feedback.'),(11,1,106996496,106996496,3,' James almost always goes above and beyond his normal job activities to please his customers. James always demonstrates how excellent customer service has a lasting positive effect on customer relationships and further sales.'),(12,1,169135057,106996496,4,'A very important skill that Sally has is her ability to effectively communicate topics that very complex. She has used this ability over the last twelve months to successfully solve several problems and the company has prospered as a result.'),(13,2,217021555,106996496,1,'Frank has an ability to effectively communicate change of plans to employees and keeps them at ease during turbulent periods.'),(14,2,106996496,106996496,1,'James almost always goes above and beyond his normal job activities to please his customers. James always demonstrates how excellent customer service has a lasting positive effect on customer relationships and further sales.\n'),(15,2,169135057,106996496,4,'A very important skill that Sally has is her ability to effectively communicate topics that very complex. She has used this ability over the last twelve months to successfully solve several problems and the company has prospered as a result.'),(16,3,217021555,106996496,1,'Hilda\'s project team always raves at her ability to encourage open communication among team members.\n'),(17,3,106996496,106996496,0,NULL),(18,3,169135057,106996496,4,'A very important skill that Sally has is her ability to effectively communicate topics that very complex. She has used this ability over the last twelve months to successfully solve several problems and the company has prospered as a result.'),(19,1,169135057,217021555,0,NULL),(20,1,217021555,217021555,4,'Has made frequent errors that are harmful to business operations.'),(21,1,106996496,217021555,4,'Jim needs to work on his ability to receive feedback from his co-workers. Usually Jim tends to attack when given criticism that is constructive in nature.'),(22,2,169135057,217021555,4,'George should try to open himself up with team members and stop isolating himself from the team. His position requires the ability to communicate freely.'),(23,2,217021555,217021555,4,'Julie needs to work on improving her communication skill set when it comes to discussing bad news to her team members. She often has a tendency to withhold the information for fear of rejection from upper management.'),(24,2,106996496,217021555,4,'Shirley has done an outstanding job this past year cooperating with her team members during a very difficult company merger. She has demonstrated an eagerness to work with other teams that were created to help with the transition and was an excellent example of how cooperation can produce great results.'),(25,3,169135057,217021555,4,'Heather always displays a positive attitude when working with her group members.'),(26,3,217021555,217021555,4,'One of the more effective aspects of Jennifer\'s management style is her capability to build a good team building environment. This has produced a positive work environment and allowed her product group improve their output.'),(27,3,106996496,217021555,4,'Jerry is able to create an environment where individuals can always share their personal thoughts that are either good or bad and not fear harsh consequences.');
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Student` (
  `student_id` varchar(10) NOT NULL,
  `student_username` varchar(40) NOT NULL,
  `student_password` varchar(40) NOT NULL,
  `student_firstname` varchar(40) NOT NULL,
  `student_lastname` varchar(40) NOT NULL,
  `student_email` varchar(40) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES ('102927927','rswinerd6','SmymQuvd','Rees','Swinerd','rswinerd6@unblog.fr'),('106996496','iciani0','A8bYvWJbx','Iolande','Ciani','iciani0@jigsy.com'),('123231231','testing','test','ing','sadad','adasd@gmail.com'),('169135057','harro7','YX5ylTT5v','Hanni','Arro','harro7@posterous.com'),('217021555','plakes1','sRS4mt','Perry','Lakes','plakes1@paypal.com'),('362190333','lkeymer3','SwMK9LePElq','Lionello','Keymer','lkeymer3@webnode.com'),('373426725','sroslen8','Ah4Svuhq','Sheelagh','Roslen','sroslen8@mashable.com'),('399274333','pcandelin2','R4TSvV5jh8y','Putnem','Candelin','pcandelin2@domainmarket.com'),('439889584','gilles5','kNSRNXKTZ','Gabi','Illes','gilles5@pcworld.com'),('625030840','bbithella','DscfYN','Berti','Bithell','bbithella@yellowbook.com'),('628395928','hsowtec','TjuwujQnf','Horatius','Sowte','hsowtec@csmonitor.com'),('648686743','jpiertone','4CMnc4','James','Pierton','jpiertone@csmonitor.com'),('755316052','ckneeboned','bfKUrw6bHiq','Consalve','Kneebone','ckneeboned@kickstarter.com'),('784193319','mkohneke9','F4dxtr','Madelle','Kohneke','mkohneke9@pagesperso-orange.fr'),('900078257','smullally4','iZbP3mUURE','Shantee','Mullally','smullally4@mashable.com'),('922485677','swhilesb','ib0MjH51XpB','Simeon','Whiles','swhilesb@irs.gov');
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudentHasCourses`
--

DROP TABLE IF EXISTS `StudentHasCourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StudentHasCourses` (
  `student_id` varchar(10) NOT NULL,
  `course_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentHasCourses`
--

LOCK TABLES `StudentHasCourses` WRITE;
/*!40000 ALTER TABLE `StudentHasCourses` DISABLE KEYS */;
INSERT INTO `StudentHasCourses` VALUES ('102927927','278917254'),('106996496','278917254'),('169135057','278917254'),('217021555','278917254'),('362190333','278917254'),('373426725','278917254'),('399274333','278917254'),('439889584','278917254'),('625030840','278917254'),('628395928','278917254'),('648686743','278917254'),('755316052','278917254'),('784193319','278917254'),('900078257','278917254'),('922485677','278917254'),('102927927','299655012'),('106996496','299655012'),('169135057','299655012'),('217021555','299655012'),('362190333','299655012'),('373426725','299655012'),('399274333','299655012'),('439889584','299655012'),('625030840','299655012'),('628395928','299655012'),('648686743','299655012'),('755316052','299655012'),('784193319','299655012'),('900078257','299655012'),('922485677','299655012'),('102927927','426383441'),('106996496','426383441'),('169135057','426383441'),('217021555','426383441'),('362190333','426383441'),('373426725','426383441'),('399274333','426383441'),('439889584','426383441'),('625030840','426383441'),('628395928','426383441'),('648686743','426383441'),('755316052','426383441'),('784193319','426383441'),('900078257','426383441'),('922485677','426383441'),('102927927','55116348'),('106996496','55116348'),('169135057','55116348'),('217021555','55116348'),('362190333','55116348'),('373426725','55116348'),('399274333','55116348'),('439889584','55116348'),('625030840','55116348'),('628395928','55116348'),('648686743','55116348'),('755316052','55116348'),('784193319','55116348'),('900078257','55116348'),('922485677','55116348'),('102927927','562182226'),('106996496','562182226'),('169135057','562182226'),('217021555','562182226'),('362190333','562182226'),('373426725','562182226'),('399274333','562182226'),('439889584','562182226'),('625030840','562182226'),('628395928','562182226'),('648686743','562182226'),('755316052','562182226'),('784193319','562182226'),('900078257','562182226'),('922485677','562182226'),('102927927','567291101'),('106996496','567291101'),('169135057','567291101'),('217021555','567291101'),('362190333','567291101'),('373426725','567291101'),('399274333','567291101'),('439889584','567291101'),('625030840','567291101'),('628395928','567291101'),('648686743','567291101'),('755316052','567291101'),('784193319','567291101'),('900078257','567291101'),('922485677','567291101'),('102927927','593726155'),('106996496','593726155'),('169135057','593726155'),('217021555','593726155'),('362190333','593726155'),('373426725','593726155'),('399274333','593726155'),('439889584','593726155'),('625030840','593726155'),('628395928','593726155'),('648686743','593726155'),('755316052','593726155'),('784193319','593726155'),('900078257','593726155'),('922485677','593726155'),('102927927','624040817'),('106996496','624040817'),('169135057','624040817'),('217021555','624040817'),('362190333','624040817'),('373426725','624040817'),('399274333','624040817'),('439889584','624040817'),('625030840','624040817'),('628395928','624040817'),('648686743','624040817'),('755316052','624040817'),('784193319','624040817'),('900078257','624040817'),('922485677','624040817'),('102927927','629866888'),('106996496','629866888'),('169135057','629866888'),('217021555','629866888'),('362190333','629866888'),('373426725','629866888'),('399274333','629866888'),('439889584','629866888'),('625030840','629866888'),('628395928','629866888'),('648686743','629866888'),('755316052','629866888'),('784193319','629866888'),('900078257','629866888'),('922485677','629866888'),('102927927','760306549'),('106996496','760306549'),('169135057','760306549'),('217021555','760306549'),('362190333','760306549'),('373426725','760306549'),('399274333','760306549'),('439889584','760306549'),('625030840','760306549'),('628395928','760306549'),('648686743','760306549'),('755316052','760306549'),('784193319','760306549'),('900078257','760306549'),('922485677','760306549'),('102927927','868029873'),('106996496','868029873'),('169135057','868029873'),('217021555','868029873'),('362190333','868029873'),('373426725','868029873'),('399274333','868029873'),('439889584','868029873'),('625030840','868029873'),('628395928','868029873'),('648686743','868029873'),('755316052','868029873'),('784193319','868029873'),('900078257','868029873'),('922485677','868029873'),('102927927','878839432'),('106996496','878839432'),('169135057','878839432'),('217021555','878839432'),('362190333','878839432'),('373426725','878839432'),('399274333','878839432'),('439889584','878839432'),('625030840','878839432'),('628395928','878839432'),('648686743','878839432'),('755316052','878839432'),('784193319','878839432'),('900078257','878839432'),('922485677','878839432'),('102927927','927885960'),('106996496','927885960'),('169135057','927885960'),('217021555','927885960'),('362190333','927885960'),('373426725','927885960'),('399274333','927885960'),('439889584','927885960'),('625030840','927885960'),('628395928','927885960'),('648686743','927885960'),('755316052','927885960'),('784193319','927885960'),('900078257','927885960'),('922485677','927885960'),('102927927','996841846'),('106996496','996841846'),('169135057','996841846'),('217021555','996841846'),('362190333','996841846'),('373426725','996841846'),('399274333','996841846'),('439889584','996841846'),('625030840','996841846'),('628395928','996841846'),('648686743','996841846'),('755316052','996841846'),('784193319','996841846'),('900078257','996841846'),('922485677','996841846'),('102927927','997503965'),('106996496','997503965'),('169135057','997503965'),('217021555','997503965'),('362190333','997503965'),('373426725','997503965'),('399274333','997503965'),('439889584','997503965'),('625030840','997503965'),('628395928','997503965'),('648686743','997503965'),('755316052','997503965'),('784193319','997503965'),('900078257','997503965'),('922485677','997503965');
/*!40000 ALTER TABLE `StudentHasCourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudentHasProjects`
--

DROP TABLE IF EXISTS `StudentHasProjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StudentHasProjects` (
  `student_id` varchar(10) NOT NULL,
  `project_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentHasProjects`
--

LOCK TABLES `StudentHasProjects` WRITE;
/*!40000 ALTER TABLE `StudentHasProjects` DISABLE KEYS */;
INSERT INTO `StudentHasProjects` VALUES ('102927927',1),('106996496',1),('169135057',1),('217021555',1),('362190333',1),('373426725',1),('399274333',1),('439889584',1),('625030840',1),('628395928',1),('648686743',1),('755316052',1),('784193319',1),('900078257',1),('922485677',1),('102927927',2),('106996496',2),('169135057',2),('217021555',2),('362190333',2),('373426725',2),('399274333',2),('439889584',2),('625030840',2),('628395928',2),('648686743',2),('755316052',2),('784193319',2),('900078257',2),('922485677',2),('102927927',3),('106996496',3),('169135057',3),('217021555',3),('362190333',3),('373426725',3),('399274333',3),('439889584',3),('625030840',3),('628395928',3),('648686743',3),('755316052',3),('784193319',3),('900078257',3),('922485677',3),('102927927',4),('106996496',4),('169135057',4),('217021555',4),('362190333',4),('373426725',4),('399274333',4),('439889584',4),('625030840',4),('628395928',4),('648686743',4),('755316052',4),('784193319',4),('900078257',4),('922485677',4),('102927927',6),('106996496',6),('169135057',6),('217021555',6),('362190333',6),('373426725',6),('399274333',6),('439889584',6),('625030840',6),('628395928',6),('648686743',6),('755316052',6),('784193319',6),('900078257',6),('922485677',6),('102927927',7),('106996496',7),('169135057',7),('217021555',7),('362190333',7),('373426725',7),('399274333',7),('439889584',7),('625030840',7),('628395928',7),('648686743',7),('755316052',7),('784193319',7),('900078257',7),('922485677',7),('102927927',8),('106996496',8),('169135057',8),('217021555',8),('362190333',8),('373426725',8),('399274333',8),('439889584',8),('625030840',8),('628395928',8),('648686743',8),('755316052',8),('784193319',8),('900078257',8),('922485677',8),('102927927',9),('106996496',9),('169135057',9),('217021555',9),('362190333',9),('373426725',9),('399274333',9),('439889584',9),('625030840',9),('628395928',9),('648686743',9),('755316052',9),('784193319',9),('900078257',9),('922485677',9),('102927927',10),('106996496',10),('169135057',10),('217021555',10),('362190333',10),('373426725',10),('399274333',10),('439889584',10),('625030840',10),('628395928',10),('648686743',10),('755316052',10),('784193319',10),('900078257',10),('922485677',10),('102927927',11),('106996496',11),('169135057',11),('217021555',11),('362190333',11),('373426725',11),('399274333',11),('439889584',11),('625030840',11),('628395928',11),('648686743',11),('755316052',11),('784193319',11),('900078257',11),('922485677',11),('102927927',12),('106996496',12),('169135057',12),('217021555',12),('362190333',12),('373426725',12),('399274333',12),('439889584',12),('625030840',12),('628395928',12),('648686743',12),('755316052',12),('784193319',12),('900078257',12),('922485677',12),('102927927',13),('106996496',13),('169135057',13),('217021555',13),('362190333',13),('373426725',13),('399274333',13),('439889584',13),('625030840',13),('628395928',13),('648686743',13),('755316052',13),('784193319',13),('900078257',13),('922485677',13),('102927927',14),('106996496',14),('169135057',14),('217021555',14),('362190333',14),('373426725',14),('399274333',14),('439889584',14),('625030840',14),('628395928',14),('648686743',14),('755316052',14),('784193319',14),('900078257',14),('922485677',14),('102927927',15),('106996496',15),('169135057',15),('217021555',15),('362190333',15),('373426725',15),('399274333',15),('439889584',15),('625030840',15),('628395928',15),('648686743',15),('755316052',15),('784193319',15),('900078257',15),('922485677',15),('106996496',24),('106996496',25);
/*!40000 ALTER TABLE `StudentHasProjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StudentHasTeams`
--

DROP TABLE IF EXISTS `StudentHasTeams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StudentHasTeams` (
  `project_id` int(11) DEFAULT NULL,
  `team_number` int(3) DEFAULT NULL,
  `student_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StudentHasTeams`
--

LOCK TABLES `StudentHasTeams` WRITE;
/*!40000 ALTER TABLE `StudentHasTeams` DISABLE KEYS */;
INSERT INTO `StudentHasTeams` VALUES (1,1,'106996496'),(1,1,'169135057'),(1,1,'217021555'),(1,2,'362190333'),(1,2,'373426725'),(1,3,'399274333'),(1,3,'439889584'),(4,1,'106996496'),(1,4,'625030840'),(1,4,'628395928'),(1,5,'648686743'),(1,5,'755316052'),(6,1,'106996496'),(1,6,'784193319'),(2,1,'784193319'),(2,2,'784193319'),(3,1,'784193319'),(3,2,'784193319'),(4,1,'784193319'),(4,2,'784193319');
/*!40000 ALTER TABLE `StudentHasTeams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Team`
--

DROP TABLE IF EXISTS `Team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Team` (
  `project_id` int(11) NOT NULL,
  `team_number` int(3) NOT NULL,
  `team_name` varchar(40) NOT NULL,
  `teamProject_name` varchar(40) NOT NULL,
  `teamProject_description` text NOT NULL,
  PRIMARY KEY (`project_id`,`team_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Team`
--

LOCK TABLES `Team` WRITE;
/*!40000 ALTER TABLE `Team` DISABLE KEYS */;
INSERT INTO `Team` VALUES (1,1,'Team_Name_01','Scope1','Etiam auctor nunc vel sodales convallis. Duis eu augue accumsan, consectetur massa vitae, euismod felis. Praesent scelerisque lobortis neque, posuere elementum leo laoreet ut. Sed auctor tellus id augue congue tempor. Vestibulum ut urna in risus efficitur volutpat eu et leo. Suspendisse non dictum nulla. Aliquam vulputate lorem eget maximus finibus. Vestibulum vitae sapien non turpis efficitur pellentesque tristique eu purus. Aenean tincidunt elementum nulla et pulvinar. Fusce consectetur elit at auctor varius. Proin id justo vehicula, aliquam ex tristique, egestas magna. Praesent neque lectus, congue in urna id, pretium pellentesque ante. Nunc fermentum aliquam nisl, eget accumsan velit fringilla eget. Nulla vulputate eget neque sed posuere. Vivamus eu lorem eleifend purus congue rhoncus ut eget dui. Nulla facilisi.'),(1,2,'Team_Name_02','Scope2','Fusce elementum nisi sed pellentesque pharetra. In consequat ut massa vitae porta. Duis tincidunt at odio vel aliquet. Donec pellentesque gravida lacus eu congue. Curabitur eget congue dolor, et vulputate ipsum. In posuere non ipsum ut vulputate. Ut et interdum mi, eget vestibulum justo. Donec tristique dui vel enim fringilla, at imperdiet justo posuere. Praesent rhoncus sit amet sapien eu imperdiet. In sit amet molestie enim, commodo dictum neque.'),(1,3,'Team_Name_03','Scope3','Vestibulum gravida sollicitudin posuere. Duis pretium sem orci, id commodo mauris porttitor mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tempor felis sapien, at consequat risus finibus sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt metus ut libero ornare, non ultricies leo facilisis. Quisque auctor quam vel quam finibus, sit amet placerat eros euismod. Curabitur dignissim at dolor eu elementum. Vivamus lacinia eu turpis non dictum. Quisque nec risus eu enim tincidunt laoreet.'),(1,4,'Team_Name_04','Scope4','Vestibulum suscipit, dolor vitae volutpat sodales, tellus lorem consectetur sapien, et tincidunt tortor sapien et quam. Integer eget pharetra orci. In non dapibus turpis. Nullam eget elit facilisis augue maximus ultrices quis at risus. In hac habitasse platea dictumst. Quisque ut tempor mauris. Proin dignissim sem nec lectus ullamcorper, ac porta mauris sodales. Cras posuere eget sapien quis facilisis. Suspendisse scelerisque ante nec vehicula euismod. Proin vel pretium leo. Nunc non nisl id risus mattis efficitur.'),(1,5,'Team_Name_05','Scope5','Duis tempor vehicula metus nec semper. Cras pharetra sodales tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut tristique, leo vel accumsan vulputate, libero nisl mattis nibh, posuere ullamcorper enim mauris non mauris. Suspendisse eu accumsan ligula. Suspendisse dapibus dui sit amet felis malesuada accumsan ac ac libero. Integer ut scelerisque odio. Maecenas sit amet mollis mauris.'),(1,6,'Team_Name_06','Scope6','Nulla egestas nec felis sit amet luctus. Praesent in euismod nunc. Ut malesuada lobortis leo, nec condimentum purus porttitor vitae. Cras lorem quam, congue rutrum est ac, bibendum lobortis ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque luctus tellus non felis hendrerit, et scelerisque quam faucibus. Ut quis purus lacus.'),(1,7,'Team_Name_07','Scope7','Phasellus porttitor risus at rutrum pharetra. Maecenas in ultricies odio, ac pretium est. Nunc imperdiet metus nec nisi interdum, nec consectetur leo porta. Fusce ac semper odio. Aliquam in lacus luctus, posuere dolor sed, pulvinar odio. Donec arcu magna, lobortis id nibh vitae, rutrum mattis odio. Nulla lacus odio, consequat ac ultrices eget, feugiat a ex. Quisque quis interdum ligula, vel facilisis eros. Proin aliquet vel urna eu rutrum. Curabitur at urna et ipsum accumsan auctor. Fusce non gravida eros.'),(1,8,'Team_Name_08','Scope8','Etiam consequat pulvinar sem nec hendrerit. Morbi metus libero, malesuada et magna quis, sodales porttitor elit. Morbi tempus pharetra tristique. Praesent quis nunc odio. Nullam malesuada augue eu diam tincidunt suscipit luctus suscipit nibh. Maecenas lorem orci, volutpat at ipsum non, euismod ultricies ante. Nunc mattis pretium lorem, vel vestibulum leo placerat id. Donec cursus lacus ac accumsan sollicitudin. Nunc at dui mollis, ultrices felis eu, maximus purus. Morbi eget interdum ligula, eget venenatis leo. Mauris a aliquet enim. Praesent mauris neque, dignissim sit amet venenatis vel, congue vel lectus.'),(2,1,'Team_Name_01','Scope9','Nunc quis aliquet velit. Praesent feugiat sollicitudin imperdiet. Nunc eu metus commodo, scelerisque purus quis, cursus enim. In volutpat imperdiet magna. Aliquam non ex consequat, consectetur sem id, sollicitudin sem. Sed metus augue, blandit et maximus et, tincidunt in magna. Ut elementum enim ac orci porttitor, eu placerat nibh feugiat. Nulla ornare porttitor dolor vitae sagittis. Nulla ullamcorper, risus in elementum dapibus, sem ligula egestas tellus, ut suscipit felis ex nec ipsum. Mauris volutpat neque id tortor rutrum euismod. Nulla egestas nec libero eu faucibus. Suspendisse potenti. Proin porttitor fringilla augue, id vestibulum risus tincidunt non. Fusce ut nibh est. Etiam pretium, felis et pulvinar vehicula, augue libero pretium leo, sed maximus leo libero non sapien.'),(2,2,'Team_Name_02','Scope10','Pellentesque feugiat nulla id neque laoreet, eu commodo tortor commodo. Mauris lacinia porttitor hendrerit. Vestibulum pharetra ultrices varius. Nunc in interdum nunc, non tincidunt augue. Nunc lobortis viverra tortor id accumsan. Donec ornare mauris quis sem tempus, vel convallis tellus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et magna interdum, vehicula sapien eget, molestie elit. Nullam venenatis eget velit quis sagittis. Sed quis purus ut ipsum pharetra malesuada eu vel nibh. Aenean eu sollicitudin odio. Curabitur mattis, lacus eu molestie luctus, nulla libero scelerisque sem, non viverra sapien massa ac ipsum.'),(2,3,'Team_Name_03','Scope11','Sed quis vulputate tortor. Curabitur ac eros auctor, volutpat ipsum sit amet, laoreet ex. Nullam nibh dui, lobortis non ligula vitae, commodo auctor nunc. Sed ut varius est, id mattis mi. Duis ac dolor at mi facilisis pharetra. Praesent vehicula rhoncus condimentum. Aliquam congue imperdiet metus, fringilla sollicitudin tellus.'),(3,1,'Team_Name_01','Scope12','Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sapien urna, laoreet sit amet elementum eu, pellentesque vestibulum elit. Sed id eros quis odio faucibus rhoncus. Quisque viverra suscipit nunc, ut tristique tellus ultrices quis. Morbi id sem mauris. Praesent scelerisque porttitor pulvinar. Aliquam faucibus dolor eget sem laoreet, nec vehicula neque malesuada. Donec et tristique elit. Praesent magna ipsum, finibus at facilisis sed, volutpat ac dolor. Aenean ut commodo risus, id suscipit urna. Praesent consectetur, dui quis ullamcorper posuere, urna tortor fermentum augue, sed scelerisque sem neque eget ipsum. Sed convallis tellus at consectetur tempus. Etiam commodo, sapien ac laoreet interdum, elit elit accumsan lectus, nec finibus sapien elit ut ex. Vestibulum eget est eu magna finibus hendrerit.'),(3,2,'Team_Name_02','Scope13','Maecenas pharetra vitae ex eu maximus. Mauris porta sed sapien ac pulvinar. Donec congue nisi elit, ut tincidunt nunc posuere vel. Mauris hendrerit varius sapien at varius. Ut ut aliquet erat, a lacinia nunc. Mauris arcu velit, rutrum nec fringilla nec, bibendum eget lectus. Ut consectetur nisl sem, eget faucibus ex egestas ac. Donec quis tortor non justo euismod ornare eget eu ipsum. In cursus dignissim lectus, a suscipit nunc placerat vitae. Vestibulum tincidunt ipsum at justo congue, non aliquet orci fermentum. Donec consectetur vestibulum orci, nec feugiat nunc mattis eu. Fusce vel ipsum ut est elementum tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'),(4,1,'Team_Name_01','Scope14','Vestibulum vitae sapien venenatis, lacinia enim et, placerat neque. Phasellus feugiat lorem nunc, ut bibendum nisl pharetra ut. Nullam aliquam faucibus odio, vitae faucibus odio efficitur ut. Praesent finibus facilisis placerat. Morbi sed orci vel erat vestibulum sollicitudin eu gravida felis. Pellentesque tortor tortor, porttitor sit amet metus vitae, viverra bibendum mi. In lacus orci, consequat ut vulputate vitae, viverra a metus. In eleifend leo orci. Proin convallis lobortis quam ullamcorper eleifend. Curabitur bibendum euismod porta. Fusce porttitor, elit non laoreet tincidunt, nulla risus commodo erat, sit amet condimentum sem urna ultricies libero. Quisque quis ipsum hendrerit, convallis nibh quis, tincidunt tortor. Suspendisse viverra massa vel nisi bibendum, ut rutrum massa dictum. Curabitur quis massa dolor.'),(4,2,'Team_Name_02','Scope15','Nulla sit amet condimentum velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vel ante vitae orci rutrum consequat ac sit amet metus. Cras viverra, purus vel pellentesque condimentum, nisi metus sagittis mauris, nec convallis tellus erat non justo. Vestibulum et egestas magna. Sed sit amet suscipit mauris, ac elementum enim. Nullam sit amet consectetur odio, ut congue quam. Proin semper accumsan erat at pulvinar. Etiam pretium tincidunt justo sagittis luctus. Ut pharetra scelerisque eros, eu mollis mi congue sed. Fusce aliquet ex rhoncus, porttitor ipsum tempus, interdum justo. Cras venenatis, risus at tempor tincidunt, mi dolor convallis elit, sed luctus turpis lacus in felis.'),(4,3,'Team_Name_03','Scope16','Lizards are a widespread group of squamate reptiles, with over 6,000 species');
/*!40000 ALTER TABLE `Team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TeamHasReviews`
--

DROP TABLE IF EXISTS `TeamHasReviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TeamHasReviews` (
  `project_id` int(11) NOT NULL,
  `team_number` int(3) NOT NULL,
  `review_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TeamHasReviews`
--

LOCK TABLES `TeamHasReviews` WRITE;
/*!40000 ALTER TABLE `TeamHasReviews` DISABLE KEYS */;
INSERT INTO `TeamHasReviews` VALUES (1,1,1),(1,1,2),(1,1,3),(1,1,4),(1,1,5),(1,1,6),(1,1,7),(1,1,8),(1,1,9),(1,1,10),(1,1,11),(1,1,12),(1,1,13),(1,1,14),(1,1,15),(1,1,16),(1,1,17),(1,1,18),(1,1,19),(1,1,20),(1,1,21),(1,1,22),(1,1,23),(1,1,24),(1,1,25),(1,1,26),(1,1,27);
/*!40000 ALTER TABLE `TeamHasReviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-03 12:02:21
