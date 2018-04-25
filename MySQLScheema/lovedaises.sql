-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 30, 2018 at 04:21 AM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lovedaises`
--

-- --------------------------------------------------------

--
-- Table structure for table `chattable`
--

CREATE TABLE `chattable` (
  `OwnersEmail` varchar(50) NOT NULL,
  `FriendEmail` varchar(50) NOT NULL,
  `Messenger` varchar(20) NOT NULL,
  `Chat` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Chat Storage';

--
-- Dumping data for table `chattable`
--

INSERT INTO `chattable` (`OwnersEmail`, `FriendEmail`, `Messenger`, `Chat`) VALUES
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'bingo'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'bingo'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'why is it appearing on left hand side'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'why is it appearing on left hand side'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'why is the niggar appearing on this side'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'why is the niggar appearing on this side'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'Its not suppose to appear on this side'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'Its not suppose to appear on this side'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'emanuel how way far'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'emanuel how way far'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'thisis the chat future '),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'thisis the chat future '),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'its working fine'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'its working fine'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'lets do this'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'lets do this'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'ok lets do this'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'ok lets do this'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'why is it that black men dont like themselve as compared to other race, its so funny'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'why is it that black men dont like themselve as compared to other race, its so funny'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'things are not supposed to be that way, lets change it now.'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'things are not supposed to be that way, lets change it now.'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'thank God its now working as it out to work'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'sending another niggar'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'why is it this way'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'main chat li hidden'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'that chat never appeared'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'that chat never appeared'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'but refuse profane and old wifes fables and exercise thyself rather unto godliness, for bodily exercise profiteth a little but godliness is profitable uto all thisgs, haveing promise of the life that now is and of that wihich is to come'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'but refuse profane and old wifes fables and exercise thyself rather unto godliness, for bodily exercise profiteth a little but godliness is profitable uto all thisgs, haveing promise of the life that now is and of that wihich is to come'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'did it go'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'did it go'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'lets see if its working'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'lets see if its working'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'something is terrible wrong '),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'something is terrible wrong '),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'I will have to make it scroll automatically'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'I will have to make it scroll automatically'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'this is not working as it ought to'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'this is not working as it ought to'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'checking it'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'checking it'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'let see if it will work'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'let see if it will work'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'not working'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'not working'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'mozilla is so funny'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'mozilla is so funny'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'moxilla is funny'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'moxilla is funny'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'we are gotv, live it love it'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'we are gotv, live it love it'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'so funny'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'so good'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'NOT FUNNY'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'checking it again'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'sending now'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'chalfa;'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'why is it not working'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'why is it not working'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'so so easy'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'so so easy'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'so so easy'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'so so easy'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'so'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'so'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'whats happening'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'whats happening'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'what happening'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'what happening'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'kkk'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'kkk'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'kkk'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'kkk'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'wh'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'wh'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'checking out something'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'checking out something'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'kkk'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'kkk'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'kdkjkd'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'kdkjkd'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'jjjfjfj'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'jjjfjfj'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'not so funny'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'not so funny'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'it seems to be working'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'it seems to be working'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'afafa'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafa'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'afafaf'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafaf'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'afafaf'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafaf'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'Godliness begins with enjoying a relationship with God which results in choosing to walk with him daily. Devotion is not an Activity.'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'Godliness begins with enjoying a relationship with God which results in choosing to walk with him daily. Devotion is not an Activity.'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'thanks to God its now working as it out to work'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'thanks to God its now working as it out to work'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'I really appreciate God for it'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'I really appreciate God for it'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'I really love it now'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'I really love it now'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'I love you Omolade'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'I love you Omolade'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'its been really fun'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'its been really fun'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'working on Adeoye project'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'working on Adeoye project'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'seeing how its going to look'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'seeing how its going to look'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'it actually looks good'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'it actually looks good'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'ok in coming from node.js'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'ok in coming from node.js'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'so so funny right now'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'so so funny right now'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'for this I bless your name, for all all you have done, for this I bless your name with all my heart heaaaaart'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'for this I bless your name, for all all you have done, for this I bless your name with all my heart heaaaaart'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'for keeping me holy'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'for keeping me holy'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'I bless you, for loving me always, I bless you, am so gratefull am so gratefull, with all my heart heart heart'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'I bless you, for loving me always, I bless you, am so gratefull am so gratefull, with all my heart heart heart'),
('google@gmail.com', 'vimeo@gmail.com', 'google@gmail.com', 'nmmb'),
('google@gmail.com', 'vimeo@gmail.com', 'google@gmail.com', 'mbgghjk'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'ghfghj'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'ghfghj'),
('google@gmail.com', 'Emmanuel@gmail.com', 'google@gmail.com', 'afafafaf'),
('google@gmail.com', 'apple@gmail.com', 'google@gmail.com', 'dfafafafa'),
('google@gmail.com', 'apple@gmail.com', 'google@gmail.com', 'afafafafa'),
('google@gmail.com', 'apple@gmail.com', 'google@gmail.com', 'afafaeee'),
('google@gmail.com', 'apple@gmail.com', 'google@gmail.com', 'dfgagaga'),
('google@gmail.com', 'vimeo@gmail.com', 'google@gmail.com', 'vfgckjkl;'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'vcgcbv,'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'vcgcbv,'),
('google@gmail.com', 'apple@gmail.com', 'google@gmail.com', 'sfaf'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'mndfk'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'mndfk'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'khdjkhfjd;fa'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'khdjkhfjd;fa'),
('google@gmail.com', 'vimeo@gmail.com', 'google@gmail.com', 'afaaf'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'afafaf'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafaf'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'bmnbn'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'bmnbn'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'jjjjk'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'jjjjk'),
('google@gmail.com', 'vimeo@gmail.com', 'google@gmail.com', 'bm,nmn'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'fgfga'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'fgfga'),
('google@gmail.com', 'vimeo@gmail.com', 'google@gmail.com', 'afafafafaf'),
('google@gmail.com', 'Emmanuel@gmail.com', 'google@gmail.com', 'afafafa'),
('Emmanuel@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafafa'),
('google@gmail.com', 'Emmanuel@gmail.com', 'google@gmail.com', 'afafaf'),
('Emmanuel@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafaf'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'afaffa'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afaffa'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'afaf'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afaf'),
('google@gmail.com', 'Emmanuel@gmail.com', 'google@gmail.com', 'afafaf'),
('Emmanuel@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafaf'),
('google@gmail.com', 'Emmanuel@gmail.com', 'google@gmail.com', 'af'),
('Emmanuel@gmail.com', 'google@gmail.com', 'google@gmail.com', 'af'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'afafafaf'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'afafafaf'),
('google@gmail.com', 'vimeo@gmail.com', 'google@gmail.com', 'afafa'),
('google@gmail.com', 'Emmanuel@gmail.com', 'google@gmail.com', 'vinjama is vinjammama'),
('Emmanuel@gmail.com', 'google@gmail.com', 'google@gmail.com', 'vinjama is vinjammama'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'Coding is hard '),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'Coding is hard '),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'But its very fun and I think Data Scientist or the guys that write machine lanquage are the guys that are core computer science engineers'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'But its very fun and I think Data Scientist or the guys that write machine lanquage are the guys that are core computer science engineers'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'checking another value'),
('google@gmail.com', 'peakmilk@gmail.com', 'google@gmail.com', 'sdg'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'lets see how it plays out'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'lets see how it plays out'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'I will definitly see how it looks'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'I will definitly see how it looks'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'Its so interesting how everything is playing out now'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'Its so interesting how everything is playing out now'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'Just want to get the video chat available as soon as possible'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'Just want to get the video chat available as soon as possible'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', ''),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', ''),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'getting things ready so fast'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'getting things ready so fast'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'status'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'status'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'status ok'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'status ok'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'my name is tunji Odelade'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'checking if its still working'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'checking if its still working'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'Ok its working'),
('Alibaba@gmail.com', 'google@gmail.com', 'google@gmail.com', 'Ok its working'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'sending this from Alibaba'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'sending this from Alibaba'),
('Alibaba@gmail.com', 'google@gmail.com', 'Alibaba@gmail.com', 'I just hope it gets there'),
('google@gmail.com', 'Alibaba@gmail.com', 'Alibaba@gmail.com', 'I just hope it gets there'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'just hoping its still working as it ougth to'),
('google@gmail.com', 'Alibaba@gmail.com', 'google@gmail.com', 'hope its still working');

-- --------------------------------------------------------

--
-- Table structure for table `daisesposting`
--

CREATE TABLE `daisesposting` (
  `FirstName` varchar(225) NOT NULL,
  `LastName` varchar(225) NOT NULL,
  `PassWord` varchar(225) NOT NULL,
  `pboneNumber` bigint(50) NOT NULL,
  `CITY` varchar(225) NOT NULL,
  `Country` varchar(225) NOT NULL,
  `State` varchar(225) NOT NULL,
  `Email` varchar(225) NOT NULL,
  `Street` varchar(225) NOT NULL,
  `Amount` int(11) NOT NULL,
  `ID` int(255) NOT NULL,
  `Discursion` varchar(200) NOT NULL,
  `PostedPicture` varchar(50) NOT NULL,
  `PersonalPicture` varchar(50) NOT NULL,
  `Tag` varchar(20) NOT NULL,
  `PostedVideo` int(11) NOT NULL,
  `Alaises` varchar(250) NOT NULL,
  `Apple` int(11) NOT NULL,
  `Avocado` int(11) NOT NULL,
  `Banana` int(11) NOT NULL,
  `BitterKola` int(11) NOT NULL,
  `BlackCurrant` int(11) NOT NULL,
  `BlackBerry` int(11) NOT NULL,
  `BlueBerry` int(11) NOT NULL,
  `BreadFruit` int(11) NOT NULL,
  `Cantaloupe` int(11) NOT NULL,
  `Cashew` int(11) NOT NULL,
  `Cherry` int(11) NOT NULL,
  `Coconut` int(11) NOT NULL,
  `Damson` int(11) NOT NULL,
  `cucumber` int(11) NOT NULL,
  `Date` int(11) NOT NULL,
  `DragonFruit` int(11) NOT NULL,
  `Durian` int(11) NOT NULL,
  `Fig` int(11) NOT NULL,
  `Grape` int(11) NOT NULL,
  `Guava` int(11) NOT NULL,
  `HuckleBerry` int(11) NOT NULL,
  `JackFruit` int(11) NOT NULL,
  `KiwiFruit` int(11) NOT NULL,
  `Kolanut` int(11) NOT NULL,
  `Jujube` int(11) NOT NULL,
  `Lime` int(11) NOT NULL,
  `Lemon` int(11) NOT NULL,
  `Lychee` int(11) NOT NULL,
  `Longan` int(11) NOT NULL,
  `Loquat` int(11) NOT NULL,
  `Mango` int(11) NOT NULL,
  `Miracle` int(11) NOT NULL,
  `Olive` int(11) NOT NULL,
  `Orange` int(11) NOT NULL,
  `Papaya` int(225) NOT NULL,
  `StarFruit` int(225) NOT NULL,
  `Peach` int(225) NOT NULL,
  `Pear` int(225) NOT NULL,
  `Pomengranate` int(225) NOT NULL,
  `PassionFruit` int(225) NOT NULL,
  `Pineapple` int(225) NOT NULL,
  `Tamarind` int(225) NOT NULL,
  `Tangerine` int(225) NOT NULL,
  `Walnut` int(225) NOT NULL,
  `WaterMelon` int(225) NOT NULL,
  `RateAvg1` int(3) NOT NULL,
  `RateAvg2` int(33) NOT NULL,
  `DaisesIdentity` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table For Posting OF Daises';

--
-- Dumping data for table `daisesposting`
--

INSERT INTO `daisesposting` (`FirstName`, `LastName`, `PassWord`, `pboneNumber`, `CITY`, `Country`, `State`, `Email`, `Street`, `Amount`, `ID`, `Discursion`, `PostedPicture`, `PersonalPicture`, `Tag`, `PostedVideo`, `Alaises`, `Apple`, `Avocado`, `Banana`, `BitterKola`, `BlackCurrant`, `BlackBerry`, `BlueBerry`, `BreadFruit`, `Cantaloupe`, `Cashew`, `Cherry`, `Coconut`, `Damson`, `cucumber`, `Date`, `DragonFruit`, `Durian`, `Fig`, `Grape`, `Guava`, `HuckleBerry`, `JackFruit`, `KiwiFruit`, `Kolanut`, `Jujube`, `Lime`, `Lemon`, `Lychee`, `Longan`, `Loquat`, `Mango`, `Miracle`, `Olive`, `Orange`, `Papaya`, `StarFruit`, `Peach`, `Pear`, `Pomengranate`, `PassionFruit`, `Pineapple`, `Tamarind`, `Tangerine`, `Walnut`, `WaterMelon`, `RateAvg1`, `RateAvg2`, `DaisesIdentity`) VALUES
('Orange', 'County', 'password', 0, '', '', '', 'google@gmail.com', '', 0, 733, 'The Nation', '3OCaj.jpg', '', 'Security', 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC65301269942548'),
('Orange', 'County', '', 0, '', '', '', 'google@gmail.com', '', 0, 734, 'Enter Your Daisesafa', 'ema1.jpg', '', 'Nutrition', 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC80848804566434'),
('Orange', 'County', '', 0, '', '', '', 'google@gmail.com', '', 0, 735, 'Enter Your Daisesvd', 'Odelade Olatunji.jpg', '', 'Relationship', 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC30440228156882'),
('Orange', 'County', '', 0, '', '', '', 'google@gmail.com', '', 0, 736, 'Enter Your Daisesvd', 'tunji1.jpg', '', 'Art', 0, '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC92550874984476'),
('kilani', 'kilani', '', 0, '', '', '', 'kilani@gmail.com', '', 0, 737, 'I need Someone to teach ame guitar!', '', '', 'Finance', 0, 'Amateur Guitarist (youar identity for this Entry Point)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC95369828028406'),
('tybhu', 'LastNameafafa', '', 0, '', '', '', 'nano@gmail.com', '', 0, 738, 'I need Someone to teach me guitar!afa', '', '', 'Finance', 0, 'Amateur Guitarist (your identity for thiafs Entry Point)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC68365695847298'),
('tybhu', 'LastNameafafa', '', 0, '', '', '', 'nano@gmail.com', '', 0, 739, 'I need Someone to teach me guitafafar!', '', '', 'Finance', 0, 'Amateur Guitarist (your ideafafntity for this Entry Point)', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC35009621499871'),
('tybhu', 'LastNameafafa', '', 0, '', '', '', 'nano@gmail.com', '', 0, 740, 'settings now working', '', '', 'News', 0, 'my networth', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC27868541111002'),
('tybhu', 'LastNameafafa', '', 0, '', '', '', 'nano@gmail.com', '', 0, 741, 'settings now working', '', '', 'News', 0, 'my networth', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC21987561068604'),
('tybhu', 'LastNameafafa', '', 0, '', '', '', 'nano@gmail.com', '', 0, 742, 'settings now working', '', '', 'News', 0, 'my networth', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC95115512199947'),
('Oladipupo', 'Adeoye', '', 0, '', '', '', 'oladipupoadeoye@gmail.com', '', 0, 743, 'How to drive', '', '', 'How to', 0, 'Alien', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ABC28686314184901');

-- --------------------------------------------------------

--
-- Table structure for table `friendstable`
--

CREATE TABLE `friendstable` (
  `OwnerEmail` varchar(50) NOT NULL,
  `FriendEmail` varchar(50) NOT NULL,
  `FriendFirstName` varchar(50) NOT NULL,
  `FriendLastName` varchar(50) NOT NULL,
  `Tag` varchar(20) NOT NULL,
  `Love` varchar(50) NOT NULL,
  `Family` varchar(50) NOT NULL,
  `Friend` varchar(50) NOT NULL,
  `Aquintance` varchar(50) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `friendstable`
--

INSERT INTO `friendstable` (`OwnerEmail`, `FriendEmail`, `FriendFirstName`, `FriendLastName`, `Tag`, `Love`, `Family`, `Friend`, `Aquintance`, `ID`) VALUES
('oladipupoadeoye@gmail.com', 'oladipupoadeoye@gmail.com', '', '', 'Owner', '', '', '', '', 1),
('vintage@gmail.com', 'vintage@gmail.com', '', '', 'Owner', '', '', '', '', 2),
('ragnagfjg@gmail.com', 'ragnagfjg@gmail.com', '', '', 'Owner', '', '', '', '', 3),
('gggg@gmail.com', 'gggg@gmail.com', '', '', 'Owner', '', '', '', '', 4),
('someThing@gmail.com', 'someThing@gmail.com', '', '', 'Owner', '', '', '', '', 5),
('odelade100@gmail.com', 'odelade100@gmail.com', '', '', 'Owner', '', '', '', '', 6),
('goma@gmail.com', 'goma@gmail.com', '', '', 'Owner', '', '', '', '', 7),
('gomaa@gmail.com', 'gomaa@gmail.com', '', '', 'Owner', '', '', '', '', 8),
('gvv@gmail.com', 'gvv@gmail.com', '', '', 'Owner', '', '', '', '', 9),
('gnnn@gmail.com', 'gnnn@gmail.com', '', '', 'Owner', '', '', '', '', 10),
('ginto@gmail.com', 'ginto@gmail.com', '', '', 'Owner', '', '', '', '', 11),
('grun@gmail.com', 'grun@gmail.com', '', '', 'Owner', '', '', '', '', 12),
('gnan@gmail.com', 'gnan@gmail.com', '', '', 'Owner', '', '', '', '', 13),
('vuvu@gmail.com', 'vuvu@gmail.com', '', '', 'Owner', '', '', '', '', 14),
('kilani@gmail.com', 'kilani@gmail.com', '', '', 'Owner', '', '', '', '', 15),
('nano@gmail.com', 'nano@gmail.com', '', '', 'Owner', '', '', '', '', 16),
('nanoR@gmail.com', 'nanoR@gmail.com', '', '', 'Owner', '', '', '', '', 17);

-- --------------------------------------------------------

--
-- Table structure for table `gooddaises`
--

CREATE TABLE `gooddaises` (
  `ID` int(55) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `onlineofflinestatustable`
--

CREATE TABLE `onlineofflinestatustable` (
  `OnlineStatus` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `onlineIdentifier` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `onlineofflinestatustable`
--

INSERT INTO `onlineofflinestatustable` (`OnlineStatus`, `Email`, `onlineIdentifier`) VALUES
('offline', 'google@gmail.com', 'ABC24190796535118'),
('online', 'peakmilk@gmail.com', 'ABC44341549257314'),
('offline', 'Apple@gmail.com', 'ABC1156973699549'),
('online', 'vimeo@gmail.com', 'ABC62182331535865'),
('online', 'Alibaba@gmail.com', 'ABC49292388497109'),
('offline', 'Emmanuel@gmail.com', 'ABC29292603689210'),
('', 'Toyota@gmail.com', ''),
('online', 'suzuki@gmail.com', 'ABC56473180977443'),
('online', 'Hinashinki@gmail.com', 'ABC65656351919829'),
('online', 'vizmoto@gmail.com', 'ABC67890099539370'),
('offline', 'benjamin@gmail.com', 'ABC74992448921860'),
('offline', 'oladipupoadeoye@gmail.com', ''),
('', 'vintage@gmail.com', ''),
('', 'ragnagfjg@gmail.com', ''),
('', 'gggg@gmail.com', ''),
('', 'someThing@gmail.com', ''),
('', 'odelade100@gmail.com', ''),
('', 'goma@gmail.com', ''),
('', 'gomaa@gmail.com', ''),
('', 'gvv@gmail.com', ''),
('', 'gnnn@gmail.com', ''),
('', 'ginto@gmail.com', ''),
('', 'grun@gmail.com', ''),
('', 'gnan@gmail.com', ''),
('', 'vuvu@gmail.com', ''),
('online', 'kilani@gmail.com', ''),
('offline', 'nano@gmail.com', ''),
('', 'nanoR@gmail.com', '');

-- --------------------------------------------------------

--
-- Table structure for table `registrationtable`
--

CREATE TABLE `registrationtable` (
  `FirstName` varchar(55) NOT NULL,
  `LastName` varchar(55) NOT NULL,
  `PassWord` varchar(44) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Telephone` varchar(20) NOT NULL,
  `Street` varchar(255) NOT NULL,
  `City` varchar(55) NOT NULL,
  `State` varchar(55) NOT NULL,
  `Country` varchar(55) NOT NULL,
  `ID` int(225) NOT NULL,
  `pictures` varchar(50) NOT NULL,
  `Alaise` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Registration Table for LoveDaises';

--
-- Dumping data for table `registrationtable`
--

INSERT INTO `registrationtable` (`FirstName`, `LastName`, `PassWord`, `Email`, `Telephone`, `Street`, `City`, `State`, `Country`, `ID`, `pictures`, `Alaise`) VALUES
('Orange', 'County', 'password', 'google@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1108, '', 'Amateur Guitarista (your identity for this Entry P'),
('Olympic', 'Gold', 'password', 'peakmilk@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1109, '', 'Amateur Guitarist (your identity for this Entry Po'),
('Apple', 'Inc', 'password', 'Apple@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1110, '', 'Amateur Guitarist (your identity for this Entry Po'),
('Vimeo', 'Stream', 'password', 'vimeo@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1111, '', 'Amateur Guitarist (your identity for this Entry Po'),
('Alibaba', 'Ecommerce', 'password', 'Alibaba@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1112, '', 'Java Developer'),
('Emmanuel', 'LivingStone', 'password', 'Emmanuel@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1113, '', 'Amateur Guitarist (your identity for this Entry Po'),
('', '', 'password', 'Toyota@gmail.com', '', '', '', '', '', 1114, '', ''),
('Suzuki', 'Yokohama', 'password', 'suzuki@gmail.com', '+2348156223568', 'No 1, Military base, Sola Agbedeyi Close, Alhaji Akintoye Avenue,Agodi North GRA, Ibadan.', 'No 1, Military base, Sola Agbedeyi Close, Alhaji Akinto', 'Oyo', 'Nigeria', 1115, '', 'Amateur Guitarist (your identity for this Entry Po'),
('Hinan', 'Machine', 'password', 'Hinashinki@gmail.com', '41001', 'Street', 'Street', 'State', 'Country', 1116, '', 'Amateur Guitarist (your identity for this Entry Po'),
('jinja', 'people', 'password', 'vizmoto@gmail.com', '211', 'Street', 'Street', 'State', 'Country', 1117, '', 'Crepto Nation'),
('Benjamin', 'FrankLin', 'password', 'benjamin@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1118, '', 'Amnateur Guitarist (your identity for this Entry P'),
('Oladipupo', 'Adeoye', 'blender', 'oladipupoadeoye@gmail.com', '08039389805', 'Wapco estate', 'Wapco estate', 'Ogun', '', 1119, '2ce4c99d290c85c214c1454e760102a9.jpg', 'Alien'),
('', '', 'vintage', 'vintage@gmail.com', '', '', '', '', '', 1120, '', ''),
('', '', 'qwerty', 'ragnagfjg@gmail.com', '', '', '', '', '', 1121, '', ''),
('', '', 'password', 'gggg@gmail.com', '', '', '', '', '', 1122, '', ''),
('', '', 'password', 'someThing@gmail.com', '', '', '', '', '', 1123, '', ''),
('', '', 'password', 'odelade100@gmail.com', '', '', '', '', '', 1124, '', ''),
('', '', 'goma', 'goma@gmail.com', '', '', '', '', '', 1125, '', ''),
('', '', 'gomaa', 'gomaa@gmail.com', '', '', '', '', '', 1126, '', ''),
('', '', 'gvv', 'gvv@gmail.com', '', '', '', '', '', 1127, '', ''),
('', '', 'gnnn', 'gnnn@gmail.com', '', '', '', '', '', 1128, '', ''),
('', '', 'ginto', 'ginto@gmail.com', '', '', '', '', '', 1129, '', ''),
('', '', 'grun', 'grun@gmail.com', '', '', '', '', '', 1130, '', ''),
('', '', 'gnan', 'gnan@gmail.com', '', '', '', '', '', 1131, '', ''),
('', '', 'vuvu', 'vuvu@gmail.com', '', '', '', '', '', 1132, '', ''),
('kilani', 'kilani', 'password', 'kilani@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1133, '', 'Amateur Guitarist (youar identity for this Entry P'),
('tybhu', 'LastNameafafa', 'Tunji32343234', 'nano@gmail.com', 'Telephone', 'Street', 'Street', 'State', 'Country', 1134, '', 'Amateur Guitarist (your ideafafntity for this Entr'),
('', '', 'password', 'nanoR@gmail.com', '', '', '', '', '', 1135, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daisesposting`
--
ALTER TABLE `daisesposting`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `friendstable`
--
ALTER TABLE `friendstable`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `gooddaises`
--
ALTER TABLE `gooddaises`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `registrationtable`
--
ALTER TABLE `registrationtable`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daisesposting`
--
ALTER TABLE `daisesposting`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=744;
--
-- AUTO_INCREMENT for table `friendstable`
--
ALTER TABLE `friendstable`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `gooddaises`
--
ALTER TABLE `gooddaises`
  MODIFY `ID` int(55) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `registrationtable`
--
ALTER TABLE `registrationtable`
  MODIFY `ID` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1136;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
